const dotenv = require('dotenv');
dotenv.config();

const config = {
  development : {
    username : "root",
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    host : process.env.HOST,
    port : process.env.PORT,
    dialect : "mysql"
  }
}

module.exports = config;