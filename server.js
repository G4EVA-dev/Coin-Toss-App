import http from 'node:http'
import { gameGetRequestHandler } from './routes/game.js';
import db from './models/db.js';
import { handleUserRoutes } from './routes/user.js';
import dotenv from 'dotenv'
import { handleResultPageRequest, handleDatabaseResultRequest } from './routes/results.js';
import url from 'url'


dotenv.config();


const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} of method: ${req.method} received.`);


    if(req.url === '/user'){
        handleUserRoutes(req, res, database)
    }else if(req.url === '/result.html'){
      handleResultPageRequest(req,res);
    }else if (req.url.startsWith('/result?id')){
      handleDatabaseResultRequest(database, req, res)
    }else{
      let filePath = '.'+req.url
      if (filePath === './'){
          filePath = './dist/index.html'
      }else{
          filePath = './dist' + req.url;
      }
      gameGetRequestHandler(filePath, res)
  }
});

let database
db.connectToDb(()=>{
  database = db.getDb()
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}) 


