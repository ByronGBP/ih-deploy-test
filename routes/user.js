const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* GET home page. */
router.get('/', (req, res, next) => {

  const data = {
    users: [{name: "", age: ""}]
  }
  res.render('user', data);
});

module.exports = router;
