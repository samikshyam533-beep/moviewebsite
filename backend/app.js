import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import movieRoute from "./routes/movieRoute.js";

dotenv.config();
const app = express();

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
