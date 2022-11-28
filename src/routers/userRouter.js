import MyRouter from "../classes/Router.js";
import { userController } from "../controllers/userController.js";

const userRouter = new MyRouter();

userRouter.method(
  "post",
  userController.signUp.bind(userController),
  "/sign-up"
);

export default userRouter.router;
