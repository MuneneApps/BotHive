const express = require("express");
const router = express.Router();
const pool = require("./config/db");
const transporter = require("./config/email");

// ── POST /api/leads ── Save quote form + send emails
router.post("/api/leads", async (req, res) => {
  const {
    businessName,
    contactName,
    country,
    phone,
    email,
    businessType,
    location,
    branches,
    terminals,
    tills,
    procurement,
    urgency,
    hardware
  } = req.body;

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // 1. Insert lead
    const leadResult = await client.query(
      `INSERT INTO leads 
        (business_name, contact_name, country, phone, email, business_type, location, branches, terminals, tills, procurement, urgency)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
       RETURNING id`,
      [
        businessName,
        contactName,
        country,
        phone,
        email,
        businessType,
        location,
        branches,
        terminals,
        tills,
        procurement,
        urgency
      ]
    );

    const leadId = leadResult.rows[0].id;

    // 2. Insert hardware items if any
    if (hardware && typeof hardware === "object") {
      for (const [itemName, quantity] of Object.entries(hardware)) {
        await client.query(
          `INSERT INTO lead_hardware (lead_id, item_name, quantity) VALUES ($1, $2, $3)`,
          [leadId, itemName, quantity]
        );
      }
    }

    await client.query("COMMIT");

    // 3. Build hardware summary for emails
    const hardwareSummary =
      hardware && Object.keys(hardware).length > 0
        ? Object.entries(hardware)
            .map(([item, qty]) => `• ${item} x${qty}`)
            .join("\n")
        : "None selected";

    // 4. Email to admin
    await transporter.sendMail({
      from: `"Bothive Leads" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `🔔 New Quote Request — ${businessName || contactName}`,
      html: `
        <h2 style="color:#0f3460;">New Quote Request #${leadId}</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Business Name</td><td style="padding:8px;border:1px solid #eee;">${businessName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Contact Person</td><td style="padding:8px;border:1px solid #eee;">${contactName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Country</td><td style="padding:8px;border:1px solid #eee;">${country}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Phone / WhatsApp</td><td style="padding:8px;border:1px solid #eee;">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Email</td><td style="padding:8px;border:1px solid #eee;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Business Type</td><td style="padding:8px;border:1px solid #eee;">${businessType}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Location</td><td style="padding:8px;border:1px solid #eee;">${location}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Branches</td><td style="padding:8px;border:1px solid #eee;">${branches}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">POS Terminals</td><td style="padding:8px;border:1px solid #eee;">${terminals}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Tills</td><td style="padding:8px;border:1px solid #eee;">${tills}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Procurement</td><td style="padding:8px;border:1px solid #eee;">${procurement}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Urgency</td><td style="padding:8px;border:1px solid #eee;">${urgency}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Hardware</td><td style="padding:8px;border:1px solid #eee;white-space:pre-line;">${hardwareSummary}</td></tr>
        </table>
      `
    });

    // 5. Confirmation email to client
    await transporter.sendMail({
      from: `"Bothive Systems" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ We received your quote request — Bothive`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:auto;">
          <div style="background:#0f3460;padding:24px;border-radius:8px 8px 0 0;">
            <h2 style="color:#fff;margin:0;">Thank you, ${contactName}! 🎉</h2>
          </div>
          <div style="padding:24px;border:1px solid #eee;border-radius:0 0 8px 8px;">
            <p>We've received your quote request for <strong>${businessName}</strong> and our team will be in touch shortly.</p>
            <h4 style="color:#0f3460;">Your Request Summary</h4>
            <p><strong>Business Type:</strong> ${businessType}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Branches:</strong> ${branches}</p>
            <p><strong>POS Terminals:</strong> ${terminals}</p>
            <p><strong>Urgency:</strong> ${urgency}</p>
            ${
              hardware && Object.keys(hardware).length > 0
                ? `<p><strong>Hardware Requested:</strong></p><p style="white-space:pre-line;">${hardwareSummary}</p>`
                : ""
            }
            <hr style="margin:20px 0;border:none;border-top:1px solid #eee;"/>
            <p style="color:#888;font-size:12px;">Bothive Systems · Nairobi, Kenya · <a href="mailto:${process.env.EMAIL_USER}">${process.env.EMAIL_USER}</a></p>
          </div>
        </div>
      `
    });

    res.status(201).json({ success: true, leadId });

  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Lead submission error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  } finally {
    client.release();
  }
});

// ── POST /api/newsletter ── Subscribe email
router.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email required" });

  try {
    await pool.query(
      `INSERT INTO newsletter_subscribers (email) VALUES ($1) ON CONFLICT (email) DO NOTHING`,
      [email]
    );

    await transporter.sendMail({
      from: `"Bothive Systems" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🎉 You're subscribed to Bothive updates!",
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:auto;">
          <div style="background:#0f3460;padding:20px;border-radius:8px 8px 0 0;">
            <h2 style="color:#fff;margin:0;">Welcome aboard! 🚀</h2>
          </div>
          <div style="padding:20px;border:1px solid #eee;border-radius:0 0 8px 8px;">
            <p>You've been subscribed to Bothive news, offers and product updates.</p>
            <p style="color:#888;font-size:12px;">If you didn't sign up, you can safely ignore this email.</p>
          </div>
        </div>
      `
    });

    res.status(201).json({ success: true, message: "Subscribed!" });

  } catch (err) {
    console.error("Newsletter error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
