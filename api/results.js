// import { getResultPage, getResultsData, sendResultData } from "../controllers/resultController.js";

// export const handleResultPageRequest = (req, res)=>{
//     if(req.url === '/result.html' && req.method === 'GET'){
//         getResultPage(res);
//     }
// }

// export const handleDatabaseResultRequest = (db, req, res)=>{
//     if(req.url.startsWith('/result?id') && req.method === 'GET'){
//         getResultsData(db,req,res)
//     }
//     if(req.url === '/result' && req.method === 'POST'){
//         sendResultData(db,req,res)
//     }
// }

import { handleDatabaseResultRequest } from '../controllers/resultController.js';

export default async (req, res) => {
  await handleDatabaseResultRequest(req, res);
};