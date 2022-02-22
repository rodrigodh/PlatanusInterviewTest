import { Request, Response } from "express";
import knex from "../database/connection";

class NewsController {
  async show(req: Request, res: Response) {
    const { id } = req.params;

    const report = await knex("news").where("id", id).first();

    if (!report) {
      return res.status(400).json({ message: "Point not found." });
    }

    return res.json(report);
  }

  async index(req: Request, res: Response) {
    const news = await knex("news").distinct("news.*");

    const serializedNews = news.map((report) => {
      return report;
    });

    return res.json(serializedNews);
  }

  async create(req: Request, res: Response) {
    const { title, description, author } = req.body;

    const trx = await knex.transaction();

    const report = {
      title,
      description,
      author,
    };

    const insertedIds = await trx("news").insert(report);
    const report_id = insertedIds[0];

    await trx.commit();

    return res.json({
      id: report_id,
      ...report,
    });
  }
}

export default NewsController;
