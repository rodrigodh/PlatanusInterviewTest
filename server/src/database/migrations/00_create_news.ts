import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("news", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("author").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("news");
}
