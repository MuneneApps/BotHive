require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// CORS - restrict to your actual domain in production
const allowedOrigins = process.env.NODE_ENV === "production"
  ? [process.env.FRONTEND_URL || "https://bothive.co.ke"]
  : ["http://localhost:3000", "http://localhost:4000"];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
const leadsRouter = require("./src/apiroutes");
app.use("/", leadsRouter);

// Health check
app.get("/health", (req, res) => res.json({ status: "ok", env: process.env.NODE_ENV }));

// Serve React build in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Bothive server running on port ${PORT} in ${process.env.NODE_ENV || "development"} mode`);
});
