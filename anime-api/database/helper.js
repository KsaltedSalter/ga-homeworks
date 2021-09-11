import mongoose from "mongoose";
import { databaseUri } from "../config/enviornment.js";

export function connectDatabase() {
  return mongoose.connect(databaseUri);
}

export function truncateDatabase() {
  if (mongoose.connection.readyState !== 0) {
    const { collections } = mongoose.connection;

    const promises = Object.keys(collections).map((collection) =>
      mongoose.connection.collection(collection).deleteMany({})
    );

    return Promise.all(promises);
  }
}

export function disconnectDatabase() {
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect();
  }
}
