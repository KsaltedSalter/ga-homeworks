import express from "express";
import { getAllAnime } from "../controllers/animeController.js";
import { createAnime } from "../controllers/animeController.js";
import { getSingleAnime } from "../controllers/animeController.js";
import { deleteSingleAnime } from "../controllers/animeController.js";
import { updateSingleAnime } from "../controllers/animeController.js";

const router = express.Router();

router.route("/anime").get(getAllAnime);
router.route("/anime").post(createAnime);
router.route("/anime/:id").get(getSingleAnime);
router.route("/anime/:id").delete(deleteSingleAnime);
router.route("/anime/:id").put(updateSingleAnime);

export default router;
