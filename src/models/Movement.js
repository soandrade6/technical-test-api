import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Movement = sequelize.define(
  "Movements",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    transaction_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    account_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Accounts",
        key: "account_number",
      },
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    timestamps: false,
  }
);
