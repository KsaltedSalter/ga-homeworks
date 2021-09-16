import { request, response } from "express";
import Anime from "../models/anime.js";

export const getAllAnime = async (request, response, next) => {
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
    return response.status(200).json(updateAnime);
  } catch (err) {
    next(err);
  }
};
