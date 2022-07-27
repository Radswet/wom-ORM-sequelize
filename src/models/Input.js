import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Seccion } from "./Seccion.js";
import { Template } from "./Template.js";

export const Input = sequelize.define(
  "Input",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.TEXT,
    },
    Tipo: {
      type: DataTypes.TEXT,
    },
    Mandatorio: {
        type: DataTypes.INTEGER,
    }
  },
  {
    timestamps: false,
    paranoid: true,
    underscored: false,
    freezeTableName: true,
    tableName: "Input",
  }  
);

Template.hasOne(Input, {
  foreignKey: "IDTemplate",
  targetID: "ID",
});

Seccion.hasOne(Input, {
  foreignKey: "IDSeccion",
  targetID: "ID",
});
