'use strict';

const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

server.on('error', err => {
  if (err) throw err;
});

server.listen(3000);