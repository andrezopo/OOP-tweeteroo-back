import UserController from "../classes/UserController.js";
import tweeteroo from "../repositories/tweeteroo.js";

export const userController = new UserController(tweeteroo);
