'use strict';

const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'Users',
    path: '/admin/users',
  });
});

exports.routes = router;