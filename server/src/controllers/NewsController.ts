import { Request, Response } from "express";
import knex from "../database/connection";

class NewsController {
  async show(req: Request, res: Response) {
    const { id } = req.params;

    const report = await knex("news").where("id", id).first();

    if (!report) {
      return res.status(400).json({ message: "Report not found." });
    }

    return res.json(report);
  }

  async index(req: Request, res: Response) {
    const news = await knex("news").distinct("news.*");

    return res.json(news);
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

  async update(req: Request, res: Response) {
    const { title, description, author, id } = req.body;

    if (!title && !description && !author) {
      return res.status(400).json({ message: "Nothing o be changed." });
    }

    const updatedReport = await knex("news")
      .update({ title, description, author })
      .where({ id });

    if (!updatedReport) {
      return res.status(400).json({ message: "Report not found." });
    }

    const report = await knex("news").where("id", id).first();

    return res.json(report);
  }
}

export default NewsController;
