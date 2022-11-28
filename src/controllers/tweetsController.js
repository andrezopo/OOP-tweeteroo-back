import TweetsController from "../classes/TweetsController.js";
import tweeteroo from "../repositories/tweeteroo.js";

const tweetsController = new TweetsController(tweeteroo);

export default tweetsController;
