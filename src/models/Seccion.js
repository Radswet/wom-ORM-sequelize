import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Template } from "./Template.js";

export const Seccion = sequelize.define(
  "Seccion",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    IDPadre: {
      type: DataTypes.INTEGER,
    },
    Nombre: {
      type: DataTypes.TEXT,
    },
    Min: {
      type: DataTypes.INTEGER,
    },
    Max: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: false,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: "Seccion",
  }
);

Template.hasOne(Seccion, {
  foreignKey: "IDTemplate",
  targetID: "ID",
});
