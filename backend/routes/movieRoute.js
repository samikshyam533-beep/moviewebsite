import express from "express";
import {
  deleteMovie,
  getMovie,
  postMovie,
  updateMovie,
} from "../controllers/movieController.js";

const router = express.Router();

router.post("/post/movie", postMovie);
router.get("/get/movie", getMovie);
router.put("/update/:id", updateMovie);
router.delete("/delete/:id", deleteMovie);

export default router;
