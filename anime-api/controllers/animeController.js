import Anime from "../models/anime.js";
import VoiceActor from "../models/voiceActor.js";
import { removedAdded } from "./helpers.js";

export const getAllAnime = async (_request, response, next) => {
  try {
    const anime = await Anime.find();
    return response.status(200).json(anime);
  } catch (err) {
    next(err);
  }
};

export let createAnime = async (request, response, next) => {
  try {
    const newAnime = await Anime.create(request.body);
    await VoiceActor.updateMany(
      { _id: newAnime.Voicector },
      { $push: { anime: newAnime._id } }
    );
    return response.status(201).json(newAnime);
  } catch (err) {
    next(err);
  }
};

export const getSingleAnime = async (request, response, next) => {
  const id = request.params.id;
  if (!id) {
    return response
      .status(404)
      .send({ message: "Anime cannot be found check again!" });
  }
  try {
    const singleAnime = await Anime.findById(id);
    return response.status(200).json(singleAnime);
  } catch (err) {
    next(err);
  }
};

export const deleteSingleAnime = async (request, response, next) => {
  const id = request.params.id;
  if (!id) {
    return response
      .status(404)
      .send({ message: "Anime cannot be found check again!" });
  }
  try {
    const deleteAnime = await Anime.findByIdAndDelete(id);
    const voiceActorsToRemove = deleteAnime.voiceActor.map((voiceActor) =>
      voiceActor.toString()
    );
    await VoiceActor.updateMany(
      { _id: voiceActorsToRemove },
      { $pull: { anime: anime._id } }
    );
    return response.status(200).json(deleteAnime);
  } catch (err) {
    next(err);
  }
};

export const updateSingleAnime = async (request, response, next) => {
  const id = request.params.id;
  if (!id) {
    return response
      .status(404)
      .send({ message: "Anime cannot be found check again!" });
  }
  try {
    const updateAnime = await Anime.findByIdAndUpdate(id, request.body, {
      new: true
    });
    const [removedVoiceActor, addedVoiceActor] = removedAdded(
      updateAnime.voiceActor.map((voiceActor) => voiceActor.toString()),
      request.body.actors
    );

    updateAnime.set(request.body);
    const savedAnime = updateAnime.save();

    await VoiceActor.updateMany(
      { _id: removedVoiceActor },
      { $pull: { anime: savedAnime._id } }
    );
    await VoiceActor.updateMany(
      { _id: addedVoiceActor },
      { $push: { anime: savedAnime._id } }
    );
    return response.status(200).json(updateAnime);
  } catch (err) {
    next(err);
  }
};
