import express from "express";
import { getAllAnime } from "../controllers/animeController.js";

const router = express.Router();

router.route("/anime").get(getAllAnime);

export default router;
