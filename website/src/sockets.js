const activeUsers = new Map();

io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  socket.on("register_session", ({ sessionId }) => {
    activeUsers.set(sessionId, socket.id);

    console.log("✅ Session registered:", sessionId);
  });

  socket.on("live_message", async (data) => {
    console.log("🔥 Incoming livechat:", data);

    try {
      // SEND TO TELEGRAM
      await axios.post(
        `https://api.telegram.org/bot${process.env.TELEGRAM_API}/sendMessage`,
        {
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: `
💬 NEW BOTHIVE LIVECHAT

🆔 Session:
${data.sessionId}

👤 Visitor:
${data.name || "Anonymous"}

📩 Message:
${data.message}
          `
        }
      );

      console.log("✅ Telegram notification sent");

      // SEND AUTO RESPONSE TO CLIENT
      io.to(socket.id).emit("agent_message", {
        text: "Thanks for contacting Bothive 🚀 A live agent will reply shortly."
      });

    } catch (err) {
      console.log(
        "❌ Telegram Error:",
        err.response?.data || err.message
      );
    }
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);

    for (const [sessionId, socketId] of activeUsers.entries()) {
      if (socketId === socket.id) {
        activeUsers.delete(sessionId);
      }
    }
  });
});