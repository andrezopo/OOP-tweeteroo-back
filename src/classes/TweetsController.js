import Controller from "./Controller.js";
import Tweet from "./Tweet.js";

export default class TweetsController extends Controller {
  constructor(tweeteroo) {
    super(tweeteroo);
  }

  createTweet(req, res) {
    const { tweet, username } = req.body;

    if (!username || !tweet) {
      return res.status(400).send("Todos os campos são obrigatórios!");
    }

    const avatar = this.tweeteroo.findAvatarByUsername.bind(this.tweeteroo)(
      username
    );

    this.tweeteroo.newTweet(new Tweet(username, avatar, tweet));

    res.status(201).send("OK, seu tweet foi criado");
  }

  getUserTweets(req, res) {
    const { username } = req.params;

    const userTweets = this.tweeteroo.getTweetsByUsername.bind(this.tweeteroo)(
      username
    );

    res.status(200).send(userTweets);
  }

  getAllTweets(req, res) {
    const { page } = req.query;

    if (page && page < 1) {
      res.status(400).send("Informe uma página válida!");
      return;
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    if (this.tweeteroo.tweets.length <= 10) {
      return res.send(this.tweeteroo.reverseTweets.bind(this.tweeteroo)());
    }

    res
      .status(200)
      .send([...this.tweeteroo.tweets].reverse().slice(start, end));
  }
}
