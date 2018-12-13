'use strict';

const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  res.send(`
    <h1>Userlist Page</h1>
    <ul>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
      <li>User 4</li>
    </ul>`);
});

app.use('/', (req, res, next) => {
  res.send(`
    <h1>Hello from Express</h1>`);
});

app.listen(3000);