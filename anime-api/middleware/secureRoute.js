import jwt from "jsonwebtoken";
import User from "../models/users.js";
import { secret } from "../config/enviornment.js";

export const secureRoute = async (request, response, next) => {
  try {
    const authToken = request.headers.authorization;

    if (!authToken || !authToken.startsWith("Bearer")) {
      return response
        .status(401)
        .send({ message: "you are not authorized to perform this action" });
    }

    const token = authToken.replace("Bearer ", "");
    jwt.verify(token, secret, async (err, data) => {
      if (err) {
        return response.status(401).send({ message: "unauthorized" });
      }
      const user = await User.findById(data.userId);
      if (!user) {
        return response.status(404).send({ message: "Not a current user bro" });
      }

      request.currentUser = user;

      next();
    });
  } catch (err) {
    return response.status(401).send({ message: "unauthorized catch" });
  }
};
