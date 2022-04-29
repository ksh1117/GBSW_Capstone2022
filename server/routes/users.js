const connection = require('../config/config')
const crypto = require('crypto');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  //password = crypto.createHash('sha256').update(password).digest('base64');
  let 
})


module.exports = router;