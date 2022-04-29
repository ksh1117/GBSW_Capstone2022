const connection = require('../config/config')
const crypto = require('crypto');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  password = crypto.createHash('sha256').update(password).digest('base64');
  let sql = "select * from users where email = ?";
  connection.query(sql, [email], (error, results, fields) => {
    if(error){
      res.send({
        "code" : 400,
        "failed": "error ocurred"
      })
    }else{
      if(results.length > 0){
        if(results[0].password == password){
          res.send({
            "code":200,
            "success":"login ok"
          });
        }else{
          res.send({
            "code":204,
            "success": "password wrong"
          });
        }
      }
    }
  })
})


module.exports = router;