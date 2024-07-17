import http from 'node:http'

import { gameGetRequestHandler } from './routes/game.js';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} of method: ${req.method} received.`);

  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './dist/index.html';
  } 
  else {
    filePath =  './dist' + req.url;
  }
  gameGetRequestHandler(filePath, res)

});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});