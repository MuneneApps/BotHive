require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const axios = require("axios");

const { Server } = require("socket.io");

const app = express();

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [process.env.FRONTEND_URL || "https://bothive.co.ke"]
    : ["http://localhost:3000", "http://localhost:4000"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
const leadsRouter = require("./src/apiroutes");
app.use("/", leadsRouter);

// HEALTH
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  },
});

// STORE ACTIVE CLIENTS
const activeUsers = new Map();

// Map Telegram message_id => sessionId so replies can be routed back
const telegramMessageMap = new Map();

/*
sessionId => {
 socketId,
 name
}
*/

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  // REGISTER USER SESSION
  socket.on("register_session", ({ sessionId }) => {
    activeUsers.set(sessionId, {
      socketId: socket.id,
    });

    console.log("Registered:", sessionId);
  });

  // CLIENT MESSAGE
  socket.on("live_message", async (data) => {
    try {
      const { sessionId, text } = data;

      console.log("Message:", text);

      const telegramText = `
💬 NEW WEBSITE CHAT

🆔 Session:
${sessionId}

📩 Message:
${text}
      `;

      // SEND TO TELEGRAM (log response)
      try {
        const resp = await axios.post(
          `https://api.telegram.org/bot${process.env.TELEGRAM_API}/sendMessage`,
          {
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: telegramText,
          }
        );

        console.log("Telegram API response:", resp.data);

        // store mapping so replies to this telegram message can be routed back to session
        try {
          const msgId = resp.data?.result?.message_id;
          if (msgId) {
            telegramMessageMap.set(msgId, sessionId);
          }
        } catch (e) {
          // ignore mapping errors
        }

        // OPTIONAL AUTO RESPONSE
        io.to(socket.id).emit("agent_message", {
          text: "Message delivered to Bothive support 🚀",
        });
      } catch (tgErr) {
        console.error("Telegram send error:", tgErr.response?.data || tgErr.message || tgErr);
        io.to(socket.id).emit("agent_message", {
          text: "Unable to deliver message to Telegram.",
        });
      }
    } catch (err) {
      console.error(err);

      io.to(socket.id).emit("agent_message", {
        text: "Unable to deliver message.",
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);

    for (const [sessionId, user] of activeUsers.entries()) {
      if (user.socketId === socket.id) {
        activeUsers.delete(sessionId);
      }
    }
  });
});

// POLL TELEGRAM FOR INCOMING MESSAGES (replies from admin)
let lastTelegramUpdateId = 0;
const pollInterval = 2500;

async function pollTelegramUpdates() {
  if (!process.env.TELEGRAM_API) return;

  try {
    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_API}/getUpdates`;
    const resp = await axios.get(url, {
      params: { offset: lastTelegramUpdateId + 1, timeout: 10 },
      timeout: 20000,
    });

    if (resp.data && resp.data.ok && Array.isArray(resp.data.result)) {
      for (const update of resp.data.result) {
        lastTelegramUpdateId = Math.max(lastTelegramUpdateId, update.update_id || 0);

        // handle replies to bot messages
        const msg = update.message || update.channel_post;
        if (!msg) continue;

        // If this is a reply to a bot message, route it back
        if (msg.reply_to_message && msg.reply_to_message.message_id) {
          const repliedId = msg.reply_to_message.message_id;
          const sessionId = telegramMessageMap.get(repliedId);
          if (sessionId) {
            const clientSocketId = activeUsers.get(sessionId)?.socketId || activeUsers.get(sessionId);
            if (clientSocketId) {
              io.to(clientSocketId).emit("agent_message", {
                text: msg.text || "",
                from: "telegram",
              });
              console.log("Forwarded Telegram reply to session:", sessionId);
            } else {
              console.log("No active socket for sessionId:", sessionId);
            }
          } else {
            console.log("No mapping for replied telegram message id:", repliedId);
          }
        }

        // Also support a simple command format: /reply <sessionId> <message>
        if (msg.text && msg.text.startsWith("/reply ")) {
          const parts = msg.text.split(" ");
          if (parts.length >= 3) {
            const sid = parts[1];
            const replyText = parts.slice(2).join(" ");
            const clientSocketId = activeUsers.get(sid)?.socketId || activeUsers.get(sid);
            if (clientSocketId) {
              io.to(clientSocketId).emit("agent_message", { text: replyText, from: "telegram" });
              console.log("/reply forwarded to", sid);
            } else {
              console.log("/reply target not connected:", sid);
            }
          }
        }
      }
    }
  } catch (err) {
    console.error("pollTelegramUpdates error:", err.message || err);
  } finally {
    setTimeout(pollTelegramUpdates, pollInterval);
  }
}

// start polling only if token present
if (process.env.TELEGRAM_API) pollTelegramUpdates();

// REACT BUILD
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Bothive server running on ${PORT}`);
});