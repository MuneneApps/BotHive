// index.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env
dotenv.config();

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Route: Save Lead Form Data
app.post("/api/leads", async (req, res) => {
  try {
    const { name, email, phone, service } = req.body;

    const { data, error } = await supabase
      .from("leads")
      .insert([{ name, email, phone, service }]);

    if (error) throw error;

    res.status(201).json({ success: true, data });
  } catch (err) {
    console.error("Error saving lead:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Route: Save Callback Form Data
app.post("/api/callbacks", async (req, res) => {
  try {
    const { name, phone } = req.body;

    const { data, error } = await supabase
      .from("callbacks")
      .insert([{ name, phone }]);

    if (error) throw error;

    res.status(201).json({ success: true, data });
  } catch (err) {
    console.error("Error saving callback:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
