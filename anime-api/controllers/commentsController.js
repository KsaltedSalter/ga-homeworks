import Anime from "../models/anime.js";

export let createAnimeComment = async (request, response, next) => {
  try {
    const id = request.params.id;
    const anime = await Anime.findById(id);
    const newComment = request.body;

    if (!anime) {
      return response
        .status(404)
        .send({ message: "Anime cannot be found check again!" });
    }
    anime.comments.push(newComment);
    const savedAnime = await anime.save();
    return response.status(201).json(savedAnime);
  } catch (err) {
    next(err);
  }
};

export let deleteAnimeComment = async (request, response, next) => {
  try {
    const { id, commentId } = request.params;
    const anime = await Anime.findById(id);
    const comment = anime.comments.id(commentId);

    if (!anime) {
      return response
        .status(404)
        .send({ message: "Anime cannot be found check again!" });
    }
    if (!comment) {
      return response.status(404).send({ message: "No Comment Baka" });
    }
    comment.remove();
    const savedAnime = await anime.save();
    return response.status(201).json(savedAnime);
  } catch (err) {
    next(err);
  }
};

export let updateAnimeComment = async (request, response, next) => {
  try {
    const { id, commentId } = request.params;
    const anime = await Anime.findById(id);
    const comment = anime.comments.id(commentId);

    if (!anime) {
      return response
        .status(404)
        .send({ message: "Anime cannot be found check again!" });
    }
    if (!comment) {
      return response.status(404).send({ message: "No Comment Baka" });
    }
    comment.set(request.body);
    const savedAnime = await anime.save();
    return response.status(201).json(savedAnime);
  } catch (err) {
    next(err);
  }
};
