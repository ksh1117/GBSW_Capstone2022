/* 데이터베이스 연결 */
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  port     : '3307',
  database : 'cloud'
});

module.exports = connection;