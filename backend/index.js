require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// If you rely on static data from dashboard, keep this, otherwise remove it
// const { holdings } = require("../dashboard/src/data/data");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URL; // ensure Render env var name = MONGO_URL

const app = express();

// Use explicit origins (no trailing slashes) and include localhost for dev:
const allowedOrigins = [
  "https://zerodha-dusky.vercel.app", // frontend (Vercel)
  "https://zerodha-ie3x.vercel.app", // dashboard (Vercel)
  "http://localhost:3000", // frontend dev
  "http://localhost:3001", // dashboard dev (if used)
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps/postman) or if in allowed list
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin. (${origin})`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(bodyParser.json());

// API routes
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("allHoldings error:", err);
    res.status(500).send("Server error");
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error("allPositions error:", err);
    res.status(500).send("Server error");
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    console.error("newOrder error:", err);
    res.status(500).send("Server error");
  }
});

// Connect to Mongo then start server
mongoose.set("strictQuery", false); // optional
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected.");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

module.exports = app;
