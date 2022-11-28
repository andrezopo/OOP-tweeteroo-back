import { Router } from "express";

export default class MyRouter {
  router;
  #basePath;
  constructor(basePath) {
    this.router = Router();
    this.#basePath = basePath ? basePath : "";
  }
  method(method, controllerFunction, complementaryPath) {
    if (complementaryPath) {
      const path = `${this.#basePath}${complementaryPath}`;
      return this.router[method](path, controllerFunction);
    }
    return this.router[method](`${this.#basePath}`, controllerFunction);
  }

  use(router) {
    this.router.use(router);
  }
}
