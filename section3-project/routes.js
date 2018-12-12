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
          <h1>The Create User Page</h1>
          <form action='/create-user' method='POST'>
            <legend>Create User</legend>
            <input type='text' name='username' placeholder='username'>
            <button type='submit'>Send</button>
          </form>
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

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });

    return req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const username = parseBody.split('=')[1];
      
      console.log(username);

      res.writeHead(304, {'Location': '/'});
      return res.end();
    });
  }

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end('Default Server Behavior...');
};

module.exports = requestHandler;