const fs = require('fs');

module.exports = {
  development: {
    dialect: 'mysql',
    host:process.env.MYSQL_HOST,
    port:parseInt(process.env.MYSQL_PORT),
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dialectOptions: {
      multipleStatements: true,
      bigNumberStrings: true
    }
  },
  test: {
    dialect: 'mysql',
    host:process.env.MYSQL_HOST,
    port:parseInt(process.env.MYSQL_PORT),
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dialectOptions: {
      multipleStatements: true,
      bigNumberStrings: true
    }
  },
  production: {
    dialect: 'mysql',
    host:process.env.MYSQL_HOST,
    port:parseInt(process.env.MYSQL_PORT),
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dialectOptions: {
      multipleStatements: true,
      bigNumberStrings: true
    }
  }
};