require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const swaggerSpec = require("./swagger");
const swaggerUi = require("swagger-ui-express");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const paymentRoutes = require("./routes/payment");

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Add this before other route declarations
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Portfolio API",
  });
});
// Routes
app.use("/auth", authRoutes);
app.use("/posts", postRoutes);
app.use("/payment", paymentRoutes);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Add error handling middleware at the end
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res) => res.status(500).json({ error: "Server error" }));
// Start Server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`),
);
