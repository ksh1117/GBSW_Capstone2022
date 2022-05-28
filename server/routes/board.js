const express = require('express');
const jwt = require('jsonwebtoken');
const { Board } = require('../models'); 

const router = express.Router();


//모든 글 불러오는 api
router.get('/', async (req, res) => {
  const { token } = req.query;
  const { id } = jwt.verify(token, process.env.JWT_SECRET); 
  try {
    const board = await Board.findAll({
      where: { userId: id }, 
    });
    return res.json({
      board,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/create', async (req, res) => {
  const { boardId, title, token } = req.body; 
  const { id } = jwt.verify(token, process.env.JWT_SECRET); 
  try {
    let board = await Board.create({
      boardId,
      title,
      userId: id,
    });
    return res.json({
      board,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;