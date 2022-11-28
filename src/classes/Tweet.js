import User from "./User.js";

export default class Tweet extends User {
  constructor(username, avatar, tweet) {
    super(username, avatar);
    this.tweet = tweet;
  }
}
