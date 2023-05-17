import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT;

// DB
connectDB();

// API
app.get("/", (req, res) => {
  res.send("Wenn Mark Recopelacion");
});

// routes
app.use("/api/users", userRoutes);

// middleware
app.use(cors());
app.use(notFound);
app.use(errorHandler);

// Listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
