import http from 'node:http'
import { gameGetRequestHandler } from './routes/game.js';
import db from './models/db.js';
import { handleUserRoutes } from './routes/user.js';


const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} of method: ${req.method} received.`);

    if(req.url === '/user'){
        handleUserRoutes(req, res, database)
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


