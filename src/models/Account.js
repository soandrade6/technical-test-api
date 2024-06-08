import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Movement } from "./Movement.js";

export const Account = sequelize.define(
  "Accounts",
  {
    account_number: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    account_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    account_holder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Movement.belongsTo(Account, { foreignKey: "account_number" });
Account.hasMany(Movement, { foreignKey: "account_number" });
