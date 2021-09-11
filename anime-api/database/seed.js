import { animeSeedData } from "./animeSeedData.js";
import Anime from "../models/anime.js";
import {
  connectDatabase,
  truncateDatabase,
  disconnectDatabase
} from "./helper.js";

async function seed() {
  try {
    await connectDatabase();
    console.log("👀 connected to database");

    await truncateDatabase();
    console.log("👀 database dropped");

    const anime = await Anime.create(animeSeedData);
    console.log(`👀${anime.length} movies added to the database`);

    console.log("👀 goodbye");
  } catch (err) {
    console.log("👀 something went wrong seeding the database");
  }

  disconnectDatabase();
}

seed();
