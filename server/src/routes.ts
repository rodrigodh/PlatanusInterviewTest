import express from "express";
import { celebrate, Joi } from "celebrate";

import NewsController from "./controllers/NewsController";
import AuthorsController from "./controllers/AuthorsController";

const routes = express.Router();

const newsController = new NewsController();
const authorsController = new AuthorsController();

routes.get("/authors", authorsController.create);
routes.get("/news", newsController.index);
routes.get("/news/:id", newsController.show);

routes.post(
  "/news",
  celebrate(
    {
      body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        author: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  newsController.create
);

export default routes;
