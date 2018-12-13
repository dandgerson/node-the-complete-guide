'use strict';

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the Middleware');
  next();
});

app.use((req, res, next) => {
  console.log('In the another Middleware');
  res.send(`
    <h1>Hello from Express</h1>`);
});

app.listen(3000);