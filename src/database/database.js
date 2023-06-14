import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "projectsdb", // db name,
  "postgres", // username
  "123123", // password
  {
    host: "db",
    dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    logging: false,
    port: 5432,
  }
);
