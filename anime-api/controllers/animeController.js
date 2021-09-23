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
    const newAnime = await Anime.create({
      ...request.body,
      createdBy: request.currentUser
    });
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
    const deleteAnime = await Anime.findById(id);
    console.log(deleteAnime.createdBy);
    console.log(request.currentUser._id);
    if (!deleteAnime.createdBy.equals(request.currentUser._id)) {
      return response
        .status(404)
        .send({ message: "can't delete this hot anime" });
    }

    const voiceActorsToRemove = deleteAnime.voiceActor.map((voiceActor) =>
      voiceActor.toString()
    );
    await VoiceActor.updateMany(
      { _id: voiceActorsToRemove },
      { $pull: { anime: deleteAnime._id } }
    );

    await deleteAnime.remove();
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
    const updateAnime = await Anime.findById(id, request.body, {
      new: true
    });
    console.log(updateAnime.createdBy);
    console.log(request.currentUser._id);
    if (updateAnime.createdBy !== request.currentUser._id) {
      return response
        .status(404)
        .send({ message: "can't add any spicy details to this anime" });
    }
    const [removedVoiceActor, addedVoiceActor] = removedAdded(
      updateAnime.voiceActor.map((voiceActor) => voiceActor.toString()),
      request.body.actors
    );

    updateAnime.set(request.body);
    const savedAnime = await updateAnime.save();

    await VoiceActor.updateMany(
      { _id: removedVoiceActor },
      { $pull: { anime: savedAnime._id } }
    );
    await VoiceActor.updateMany(
      { _id: addedVoiceActor },
      { $push: { anime: savedAnime._id } }
    );
    return response.status(200).json(savedAnime);
  } catch (err) {
    next(err);
  }
};
