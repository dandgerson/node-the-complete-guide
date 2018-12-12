'use strict';

const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

server.on('error', err => {
  if (err) throw err;
});

server.listen(3000);