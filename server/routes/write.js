const connection = require('../config/config')
const crypto = require('crypto');
const express = require('express');
const router = express.Router();


router.get('/read', (req, res) => {
  let sql = "select * from content";
  connection.query(sql, (error, results, fields) => {
    if(error){
      console.error(error);
      res.send({
        "code": "400",
        "message": "잘못된 요청입니다"
      })
    }else{
      console.log(results);
      res.json(results)
    }
  })
})

router.post('/create', (req, res) => {
  const write = {
    "title" : req.body.title,
    "content" : req.body.content
  }
  let sql = "insert into content set ?"
  connection.query(sql, write, (error, results, fields) => {
    if(error){
      console.error(error);
      res.send({
        "code": "400",
        "message": "잘못된 요청입니다"
      })
    }else{
      console.log(results);
      res.send({
        "code": 200,
        "success": "글 정보 입력 성공"
      });
    }
  })
})

router.put('/update/:id', (req, res) => {
  const write = {
    "title" : req.body.title,
    "content" : req.body.content
  }
  let sql = "update content set ? where id = ?";
  connection.query(sql, [write, req.body.id], (error, results, fields) => {
    if(error){
      console.error(error);
      res.send({
        "code": "400",
        "message": "잘못된 요청입니다"
      })
    }else{
      res.send({
        "code": 200,
        "message": "글 수정 성공"
      })
    }
  })
})


router.delete('/delete/:id', (req, res) => {
  let id = req.body.id;
  let sql = "delete from content where id = ?";
  connection.query(sql, id, (error, results, fields) => {
    if(error) {
      console.error(error)
      res.send({
        "code" : 400,
        "message" : "잘못된 요청입니다"
      })
    }else{
      res.send({
        "code" : 200,
        "message" : "삭제 완료"
      })
    }
  })
})


module.exports = router;