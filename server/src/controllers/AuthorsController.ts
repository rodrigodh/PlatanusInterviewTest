import { Request, Response } from "express";
import knex from "../database/connection";

class AuthorsController {
  async create(req: Request, res: Response) {
    const authors = await knex("authors").select("*");
    return res.json(authors);
  }
}

export default AuthorsController;
