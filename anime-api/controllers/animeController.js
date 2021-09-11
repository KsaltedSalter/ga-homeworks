import Anime from "../models/anime.js";

export const getAllAnime = async (request, response, next) => {
  try {
    const anime = await Anime.find();
    return response.status(200).json(anime);
  } catch (err) {
    next(err);
  }
};
