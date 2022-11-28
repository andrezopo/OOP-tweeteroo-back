import User from "../classes/User.js";
import Controller from "./Controller.js";

export default class UserController extends Controller {
  constructor(tweeteroo) {
    super(tweeteroo);
  }
  signUp(req, res) {
    const { username, avatar } = req.body;
    if (!username || !avatar) {
      res.status(400).send("Todos os campos são obrigatórios!");
      return;
    }

    this.tweeteroo.newUser(new User(username, avatar));

    res.status(200).send("OK deu tudo certo");
  }
}
