import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("authors").insert([
    { name: "Juliana Damiani" },
    { name: "Rodrigo Schieck" },
    { name: "Platanus Tech" },
  ]);
}
