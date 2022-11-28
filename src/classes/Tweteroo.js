export default class Tweeteroo {
  constructor() {
    this.users = [];
    this.tweets = [];
  }

  newUser(user) {
    this.users.push(user);
  }

  newTweet(tweet) {
    this.tweets.push(tweet);
  }

  reverseTweets() {
    return this.tweets.reverse();
  }

  findAvatarByUsername(username) {
    const { avatar } = this.users.find((user) => user.username === username);
    return avatar;
  }

  getTweetsByUsername(username) {
    const userTweets = this.tweets.filter((t) => t.username === username);
    return userTweets;
  }
}
