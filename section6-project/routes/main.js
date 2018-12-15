'use strict';

const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
  res.render('index', {
    pageTitle: 'Home',
    path: '/',
  });
});

router.post('/', (req, res, next) => {
  users.push({
    username: req.body.username,
    age: req.body.age,
  });
  res.redirect('/');
});

exports.routes = router;
exports.users = users;