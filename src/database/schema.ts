import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5433,
  database: "learning",
  username: "postgres",
  password: "solicy123",
});


