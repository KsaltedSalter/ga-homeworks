import express from "express";
import router from "./config/router.js";

import { port } from "./config/enviornment.js";
import { connectDatabase } from "./database/helper.js";

const app = express();

app.use(express.json());
app.use("/api", router);

async function startServer() {
  try {
    await connectDatabase();
    console.log("👀 mongoose is a-go yo");
    app.listen(port, () => {
      console.log(`👀 anime app listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.log("👀  somethings wrong!");
  }
}
startServer();
