import Sequelize from "sequelize";

export const sequelize = new Sequelize("my_bank", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});
