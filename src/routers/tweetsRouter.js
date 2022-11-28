import MyRouter from "../classes/Router.js";
import tweetsController from "../controllers/tweetsController.js";

const tweetsRouter = new MyRouter("/tweets");

tweetsRouter.method(
  "post",
  tweetsController.createTweet.bind(tweetsController)
);

tweetsRouter.method(
  "get",
  tweetsController.getUserTweets.bind(tweetsController),
  "/:username"
);
tweetsRouter.method(
  "get",
  tweetsController.getAllTweets.bind(tweetsController)
);

export default tweetsRouter.router;
