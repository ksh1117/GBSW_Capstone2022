const express = require('express');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
const { User, Board } = require('../models'); 
const router = express.Router();


//유저 정보 수정 api
router.post('/edit', async (req, res, next) => {
  const { email, name, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 12);
    await User.update({
      name,
      password: hash,
    }, {
      where: {email:email}
    });
    return res.status(200).json({success: 'user info edited succesfully'});
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;