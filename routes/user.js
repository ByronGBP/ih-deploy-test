const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* GET home page. */
router.get('/', (req, res, next) => {

  User.find({}, (err, result) => {
    if (err) {
      next(err);
    }
    const data = {
      users: result
    }
    res.render('user', data);
  });
});

router.post('/', (req, res, next) => {
  const data = {
     name: req.body.username,
     age: req.body.age
  }

  const newUser = new User(data);
  newUser.save((err, result) => {
    if (err) {
      return next(err);
    }
    res.redirect('/users');
  })
});

module.exports = router;
