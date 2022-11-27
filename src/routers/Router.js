import { Router } from "express";

export default class Router {
  #router;
  #basePath;
  constructor(basePath) {
    this.#router = Router();
    this.#basePath = basePath;
  }
  method(method, complementaryPath, controllerFunction) {
    if (complementaryPath) {
      return this.#router[`${method}`](
        `${this.#basePath}/${complementaryPath}`,
        controllerFunction
      );
    }
    return this.#router[`${method}`](`${this.#basePath}`, controllerFunction);
  }
}
