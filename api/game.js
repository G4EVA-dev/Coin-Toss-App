// ** main page route

// import fs from 'fs'
// import path from 'path'

// const mimeTypes = {
//     '.html': 'text/html',
//     '.js': 'application/javascript',
//     '.css': 'text/css',
//     '.json': 'application/json',
//     '.png': 'image/png',
//     '.jpg': 'image/jpg',
//     '.gif': 'image/gif',
//     '.svg': 'image/svg+xml',
//     '.wav': 'audio/wav',
//     '.mp4': 'video/mp4',
//     '.woff': 'application/font-woff',
//     '.ttf': 'application/font-ttf',
//     '.eot': 'application/vnd.ms-fontobject',
//     '.otf': 'application/font-otf',
//     '.wasm': 'application/wasm',
//     '.mp3': 'audio/mp3'
//   };
// export const gameGetRequestHandler = function (filePath, res){
//     const extName = String(path.extname(filePath)).toLowerCase()
//     let contentType = mimeTypes[extName];


//     fs.readFile(filePath,(error, data)=>{
//         if(error){
//             console.log(error)
//         }else{
//             res.writeHead(200, {
//                 'content-type': contentType
//             })
//             res.end(data, 'utf-8')
//         }
//     })
// }

import { gameGetRequestHandler } from '../controllers/gameController.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (req, res) => {
  let filePath = path.join(__dirname, '../dist', req.url === '/' ? 'index.html' : req.url);
  gameGetRequestHandler(filePath, res);
};
