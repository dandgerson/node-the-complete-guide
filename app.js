'use strict';

const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
  console.log('Enter in the another middleware');
  res.send(`
    <h1>Add Product Here</h1>`);
});

app.use('/', (req, res, next) => {
  console.log('Enter in the another middleware');
  res.send(`
    <h1>Hello from Express</h1>`);
});

app.listen(3000);