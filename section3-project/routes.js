'use strict';

const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write(`
      <html>
        <head>
          <title>My first Page</title>
        </head>
        <body>
          <h1>The Main Project Page</h1>
        </body>
      </html>`);
    return res.end();
  }
  if (url === '/users') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write(`
      <html>
        <head>
          <title>Users</title>
        </head>
        <body>
          <h1>Users</h1>
          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
          </ul>
        </body>
      </html>`);
    return res.end();

  }

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end('Default Server Behavior...');
};

module.exports = requestHandler;