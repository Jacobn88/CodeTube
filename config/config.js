require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    host: process.env.DBHOST,
    port: 3306,
    dialect: "mysql"
    // username: "root",
    // password: "dbpassword",
    // database: "codetube",
    // host: "127.0.0.1",
    // port: 3306,
    // dialect: "mysql"
  },
  test: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    host: process.env.DBHOST,
    port: 3306,
    dialect: "mysql"
  },
  production: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    host: process.env.DBHOST,
    port: 3306,
    dialect: "mysql"
  }
}
