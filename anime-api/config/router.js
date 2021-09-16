import express from "express";

import { getAllAnime } from "../controllers/animeController.js";
import { createAnime } from "../controllers/animeController.js";
import { getSingleAnime } from "../controllers/animeController.js";
import { deleteSingleAnime } from "../controllers/animeController.js";
import { updateSingleAnime } from "../controllers/animeController.js";

import { createAnimeComment } from "../controllers/commentsController.js";
import { deleteAnimeComment } from "../controllers/commentsController.js";
import { updateAnimeComment } from "../controllers/commentsController.js";

const router = express.Router();

router.route("/anime").get(getAllAnime);
router.route("/anime").post(createAnime);

router.route("/anime/:id").get(getSingleAnime);
router.route("/anime/:id").delete(deleteSingleAnime);
router.route("/anime/:id").put(updateSingleAnime);

router.route("/anime/:id/comments").post(createAnimeComment);

router.route("/anime/:id/comments/:commentId").delete(deleteAnimeComment);
router.route("/anime/:id/comments/:commentId").put(updateAnimeComment);

export default router;
