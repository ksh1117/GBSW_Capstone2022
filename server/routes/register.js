const connection = require('../config/config')
const crypto = require('crypto');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  
  password = crypto.createHash('sha256').update(password).digest('base64');

  let sql = "select email from users where email = ?";
  connection.query(sql, [email], (error, results, fields) => {
    if(results.length == 0){
      res.send({"code": 200, "message": "회원가입 성공"})
      // console.log(name, email, password)
      connection.query("insert into users(name, email, password) values (?, ?, ?)", [name, email, password], (error, results, fields) => {})
    }else{
      res.send({
        "code": 400,
        "message": "이메일 존재"
      })
    }
  })
})


module.exports = router;