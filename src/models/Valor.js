import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Input } from "./Input.js";

export const Valor = sequelize.define(
  "Valor",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Valor: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
    paranoid: true,
    underscored: false,
    freezeTableName: true,
    tableName: "Valor",
  }  
);

Input.hasOne(Valor, {
  foreignKey: "IDInput",
  targetID: "ID",
});
