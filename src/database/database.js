import Sequelize from "sequelize";

export const sequelize = new Sequelize('test-db', 'user', 'pass', { 
    dialect : 'sqlite',
    host : './database/dev.sqlite',
});

