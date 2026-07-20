import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import movieRoute from "./routes/movieRoute.js";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
// app.listen(process.env.PORT, () => {
//   console.log("server is running on port", process.env.PORT);
// });

// app.post("/", (req, res) => {
//   res.send("welcome to movie api");
// });
// app.get("/home", (req, res) => {
//   res.status(200).json({ message: "this is home page of movie api" });
// });

app.use("/api/movie", movieRoute);
app.use("/api/auth", authRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
    });
    console.log("Connected to MongoDB");
  })

  .catch((error) => {
    console.error("Database connection error:", error);
  });
