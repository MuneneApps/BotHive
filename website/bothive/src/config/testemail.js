require("dotenv").config();
const transporter = require("./email");

async function test() {
  try {
    console.log("Sending email...");

    const info = await transporter.sendMail({
      from: `"Bothive" <quotation@bothive.co.ke>`,
      to: "quotation@bothive.co.ke",
      subject: "Test",
      text: "Testing SMTP"
    });

    console.log("SUCCESS:", info.messageId);

  } catch (err) {
    console.log("FAILED:");
    console.log(err);
  }
}

test();