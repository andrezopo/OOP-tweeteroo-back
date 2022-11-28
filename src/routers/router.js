import MyRouter from "../classes/Router.js";
import tweetsRouter from "./tweetsRouter.js";
import userRouter from "./userRouter.js";

const router = new MyRouter("/");

router.use(userRouter);
router.use(tweetsRouter);

export default router.router;
