'use strict';

const express = require('express');

const {users} = require('./main');

const router = express.Router();

router.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'Users',
    path: '/admin/users',
    users: users,
  });
});

exports.routes = router;