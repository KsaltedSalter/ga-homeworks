import Anime from "../models/anime.js";
import VoiceActor from "../models/voiceActor.js";
import { removedAdded } from "./helpers.js";

export const getAllVoiceActors = async (_request, response, next) => {
  try {
    const actors = await VoiceActor.find();
    return response.status(200).json(actors);
  } catch (err) {
    next(err);
  }
};

export const getAllAnimeForVoiceActor = async (request, response, next) => {
  const id = request.params.id;
  try {
    const actors = await VoiceActor.findById(id).populate("anime");
    return response.status(200).json(actors.anime);
  } catch (err) {
    next(err);
  }
};

export let createVoiceActor = async (request, response, next) => {
  try {
    const newVoiceActor = await VoiceActor.create(request.body);
    await Anime.updateMany(
      { _id: newVoiceActor.anime },
      { $push: { voiceActor: newVoiceActor._id } }
    );
    return response.status(201).json(newVoiceActor);
  } catch (err) {
    next(err);
  }
};

export const getSingleVoiceActor = async (request, response, next) => {
  const id = request.params.id;
  try {
    const singleVoiceActor = await VoiceActor.findById(id);
    if (!singleVoiceActor) {
      return response
        .status(404)
        .send({ message: "Voice Actor does not exist" });
    }
    return response.status(200).json(singleVoiceActor);
  } catch (err) {
    next(err);
  }
};

export const deleteSingleVoiceActor = async (request, response, next) => {
  const id = request.params.id;

  try {
    const deleteVoiceActor = await VoiceActor.findByIdAndDelete(id);
    if (!deleteVoiceActor) {
      return response
        .status(404)
        .send({ message: "Voice Actor does not exist" });
    }
    const animeToRemove = deleteVoiceActor.anime.map((anime) =>
      anime.toString()
    );
    await Anime.updateMany(
      { _id: animeToRemove },
      { $pull: { voiceActor: deleteVoiceActor._id } }
    );
    return response.status(200).json(deleteVoiceActor);
  } catch (err) {
    next(err);
  }
};

export const updateSingleVoiceActor = async (request, response, next) => {
  const id = request.params.id;
  try {
    const updateVoiceActor = await VoiceActor.findByIdAndUpdate(id);
    if (!updateVoiceActor) {
      return response
        .status(404)
        .send({ message: "Voice Actor does not exist" });
    }
    const [removedAnime, addedAnime] = removedAdded(
      updateVoiceActor.anime.map((anime) => anime.toString()),
      request.body.anime
    );
    updateVoiceActor.set(request.body);
    const savedVoiceActor = await updateVoiceActor.save();

    await Anime.updateMany(
      { _id: removedAnime },
      { $pull: { voiceActor: updateVoiceActor._id } }
    );
    await Anime.updateMany(
      { _id: addedAnime },
      { $push: { voiceActor: savedVoiceActor._id } }
    );

    return response.status(200).json(updateVoiceActor);
  } catch (err) {
    next(err);
  }
};
