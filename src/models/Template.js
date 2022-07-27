import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Template = sequelize.define(
  "Template",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
    paranoid: true,
    underscored: false,
    freezeTableName: true,
    tableName: "Template",
  }  
);
