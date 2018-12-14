'use strict';

const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
  res.render('index', {
    pageTitle: 'Add User',
    path: '/',
  });
});

router.post('/', (req, res, next) => {
  users.push({user: req.body.username});
  res.redirect('/');
});