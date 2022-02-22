import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("report_authors", (table) => {
    table.increments("id").primary();

    table.integer("report_id").notNullable().references("id").inTable("news");

    table
      .integer("author_id")
      .notNullable()
      .references("id")
      .inTable("authors");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("report_authors");
}
