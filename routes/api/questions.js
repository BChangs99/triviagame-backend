const express = require('express');
const router = express.Router();
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

// Load Question model
// const Question = require('../../models/Question');

// @route GET api/question/test
// @description Tests questions route
// @access Public
router.get('/', (req, res) => {
   try {
      fetch(`https://opentdb.com/api.php?amount=10&category=${req.query.category}&type=multiple&encode=url3986`)
      .then(response => response.json())
      .then(data => {
         res.json(data)
      })
      .catch(err => {
         console.log(err)
      })
   } catch (error) {
      res.status(500).send("Server Error")
   }
});

module.exports = router;