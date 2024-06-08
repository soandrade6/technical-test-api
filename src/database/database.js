import Sequelize from "sequelize";

const sequelize = new Sequelize("my_bank", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
