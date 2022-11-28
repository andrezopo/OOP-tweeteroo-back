import chalk from "chalk";
import express from "express";
import { json } from "express";
import cors from "cors";
import router from "./routers/router.js";

const app = express();

app.use(cors());
app.use(json());

app.use(router);

app.listen(5001, () => {
  console.log(chalk.bold.blue("Servidor funfando de boas!!!"));
});
