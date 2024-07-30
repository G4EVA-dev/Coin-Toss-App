// export const createUser = (db, req, res)=>{
//     let data =''
//     req.on('data', chunk=> data+= chunk);
//     req.on('end', ()=>{
//         db.collection('userThoughts')
//          .insertOne(JSON.parse(data))
//          .then(jsonResult=>{
//                 res.writeHead(201,{
//                     "Content-type" : "application/json"
//                 })
//                 res.end(JSON.stringify(jsonResult), 'utf-8')
//          })
//          .catch(error=>{
//                 res.writeHead(201,{
//                 "Content-type" : "application/json"
//                 })
//                 res.end(JSON.stringify(error), 'utf-8')  
//         })
//     })
// }

import db from '../models/db.js';

// Function to create a new user in the database
export const createUser = (req, res) => {
  let data = '';
  
  req.on('data', chunk => data += chunk);
  
  req.on('end', async () => {
    db.connectToDb(async ()=>{
        try {
            const database = await db.getDb();
            const jsonResult = await database.collection('userThoughts').insertOne(JSON.parse(data));
            res.writeHead(201, {
              "Content-type": "application/json"
            });
            res.end(JSON.stringify(jsonResult), 'utf-8');
          } catch (error) {
            res.writeHead(500, {
              "Content-type": "application/json"
            });
            res.end(JSON.stringify(error), 'utf-8');
          }
    })
  });
};

// Function to handle user routes
export const handleUserRoutes = async (req, res) => {
  if (req.method === 'POST') {
    createUser(req, res);
  } else {
    // Handle other HTTP methods if needed
    res.writeHead(405, { "Content-type": "application/json" });
    res.end(JSON.stringify({ message: "Method not allowed" }), 'utf-8');
  }
};