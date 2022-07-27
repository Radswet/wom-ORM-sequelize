import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Template } from "../models/Template.js";
import { Seccion } from "../models/Seccion.js";

export const Especial = sequelize.define(
  "Especial",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Tipo: {
      type: DataTypes.TEXT,
    },
    Nombre: {
      type: DataTypes.TEXT,
    },
    Consulta: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
    paranoid: true,
    underscored: false,
    freezeTableName: true,
    tableName: "Especial",
  }
);

Seccion.hasOne(Especial, {
  foreignKey: "IDSeccion",
  targetID: "ID",
});

Template.hasOne(Especial, {
  foreignKey: "IDTemplate",
  targetID: "ID",
});