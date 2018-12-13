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
          <title>My second Page</title>
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
    
    const body = [];
    
    req.on('data', chunk => {
      body.push(chunk);
      console.log(chunk);
    });
    
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      
      fs.writeFile('./message.txt', message, err => {
        if (err) throw err;
        
        res.writeHead(302, {'Location': '/'});
        return res.end();
      });
      
    });
  }
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end('Default Server Behavior...');
};

module.exports = requestHandler;