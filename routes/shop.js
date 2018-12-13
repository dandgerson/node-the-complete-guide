'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('The default server behavior');
  res.send(`
    <h1>The default server behavior</h1>`);
});

module.exports = router;