import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxLength: 300 },
    favouriteCharacter: { type: String, required: true, maxLength: 50 },
    rating: { type: Number, required: true, min: 1, max: 10 }
  },
  { timestamps: true }
);

const animeSchema = new mongoose.Schema({
  title: String,
  mainProtagonist: String,
  releaseYear: Number,
  completed: Boolean,
  genre: String,
  voiceActor: [{ type: mongoose.Types.ObjectId, ref: "VoiceActor" }],
  comments: [commentSchema]
});

animeSchema.plugin(mongooseUniqueValidator);

const Anime = mongoose.model("Anime", animeSchema);

export default Anime;
