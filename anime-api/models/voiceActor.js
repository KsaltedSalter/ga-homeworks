import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const voiceActorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  anime: [{ type: mongoose.Types.ObjectId, ref: "Anime" }]
});

voiceActorSchema.plugin(mongooseUniqueValidator);

const VoiceActor = mongoose.model("VoiceArtist", voiceActorSchema);

export default VoiceActor;
