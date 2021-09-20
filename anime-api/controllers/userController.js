import jwt from "jsonwebtoken";
import User from "../models/users.js";
import { secret } from "../config/enviornment.js";

export const registerUser = async (request, response, next) => {
  try {
    const user = await User.create(request.body);
    return response.status(201).send(user);
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (request, response, next) => {
  try {
    const user = await User.findOne({ email: request.body.email });
    if (!user) {
      return response.status(404).send({ message: "not a user!" });
    }

    if (!user.validatePassword(request.body.password)) {
      return response.status(404).send({ message: "check password" });
    }

    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "12h" });
    return response.status(202).send({ token, message: "you're in" });
  } catch (err) {
    next(err);
  }
};
