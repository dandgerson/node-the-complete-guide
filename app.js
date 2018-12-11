'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write(`
      <html>
        <head>
          <title>My first Page</title>
        </head>
        <body>
          <form action='/message' method='POST'>
            <input type='text' name='message'>
            <button type='submit'>Send</button>
          </form>
        </body>
      </html>`);
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.writeHead(304, {'Location': '/'});
    return res.end();
  }


  res.setHeader('Conten-Type', 'text/html');
  res.write('Default Server Behavior...');
  res.end();
});

server.on('error', e => {
  if (e) {
    console.log(e);
  }
});

server.listen(3000);