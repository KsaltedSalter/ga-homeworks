import express from "express";

import { getAllAnime } from "../controllers/animeController.js";
import { createAnime } from "../controllers/animeController.js";
import { getSingleAnime } from "../controllers/animeController.js";
import { deleteSingleAnime } from "../controllers/animeController.js";
import { updateSingleAnime } from "../controllers/animeController.js";

import { createAnimeComment } from "../controllers/commentsController.js";
import { deleteAnimeComment } from "../controllers/commentsController.js";
import { updateAnimeComment } from "../controllers/commentsController.js";

import { getAllVoiceActors } from "../controllers/voiceActorController.js";
import { updateSingleVoiceActor } from "../controllers/voiceActorController.js";
import { getAllAnimeForVoiceActor } from "../controllers/voiceActorController.js";
import { createVoiceActor } from "../controllers/voiceActorController.js";
import { getSingleVoiceActor } from "../controllers/voiceActorController.js";
import { deleteSingleVoiceActor } from "../controllers/voiceActorController.js";

import { loginUser } from "../controllers/userController.js";
import { registerUser } from "../controllers/userController.js";
import { secureRoute } from "../middleware/secureRoute.js";

const router = express.Router();

router.route("/anime").get(getAllAnime);
router.route("/anime").post(secureRoute, createAnime);

router.route("/anime/:id").get(getSingleAnime);
router.route("/anime/:id").delete(secureRoute, deleteSingleAnime);
router.route("/anime/:id").put(secureRoute, updateSingleAnime);

router.route("/anime/:id/comments").post(secureRoute, createAnimeComment);

router
  .route("/anime/:id/comments/:commentId")
  .delete(secureRoute, deleteAnimeComment);
router
  .route("/anime/:id/comments/:commentId")
  .put(secureRoute, updateAnimeComment);

router.route("/voiceactor").get(getAllVoiceActors);
router.route("/voiceactor").post(secureRoute, createVoiceActor);
router.route("/voiceactor/:id").get(getSingleVoiceActor);
router.route("/voiceactor/:id").put(secureRoute, updateSingleVoiceActor);
router.route("/voiceactor/:id").delete(secureRoute, deleteSingleVoiceActor);

router.route("/voiceactor/:id/anime").get(getAllAnimeForVoiceActor);

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

export default router;
