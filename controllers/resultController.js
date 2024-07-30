// import fs from 'fs'
// import { ObjectId } from 'mongodb'
// import url from 'url'

// export const getResultPage = (res)=>{
//     let filePath = './dist/result.html'

//     fs.readFile(filePath, (error,data)=>{
//         if(error){
//             console.log("error :", error)
//         }else{
//             res.writeHead(200,{ "Content-type":"text/html"})
//             res.end(data, 'utf-8')
//         }
//     })
// }

// export const getResultsData = (db,req,res)=>{
//     let ID = url.parse(req.url,true).query.id
//     const dbID = new ObjectId(ID)

//     db.collection("results")
//      .findOne({_id : dbID})
//      .then(doc => {
//         res.writeHead(200, {
//             "Content-type": "application/json"
//         })
//         res.end(JSON.stringify(doc),'utf-8')
//      })
// }

// export const sendResultData = (db,req,res)=>{
//     let data=''
//     req.on('data',chunk=> data+=chunk)
//     req.on('end',()=>{
//         db.collection("results")
//         .insertOne(JSON.parse(data))
//         .then(jsonResult=>{
//             res.writeHead(201, {
//                 'Content-type':"application/json"
//             })
//             res.end(JSON.stringify(jsonResult))
//         })
//         .catch(error=>{
//             res.writeHead(201,{
//             "Content-type" : "application/json"
//             })
//             res.end(JSON.stringify(error), 'utf-8')  
//         })
//     })
// }

import db from '../models/db.js';
import url from 'url';
import { ObjectId } from 'mongodb';

// Function to get result data from the database
export const getResultsData = async (req, res) => {
  const ID = url.parse(req.url, true).query.id;
  const dbID = new ObjectId(ID);

  db.connectToDb(async ()=>{
    try {
        const database = await db.getDb();
        const doc = await database.collection("results").findOne({ _id: dbID });
        res.writeHead(200, {
          "Content-type": "application/json"
        });
        res.end(JSON.stringify(doc), 'utf-8');
      } catch (error) {
        res.writeHead(500, {
          "Content-type": "application/json"
        });
        res.end(JSON.stringify(error), 'utf-8');
      }
  })

};

// Function to send result data to the database
export const sendResultData = async (req, res) => {
  let data = '';
  req.on('data', chunk => data += chunk);
  req.on('end', async () => {
    db.connectToDb(async ()=>{
        try {
            const database = await db.getDb();
            console.log(database)
            const jsonResult = await database.collection("results").insertOne(JSON.parse(data));
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

// Function to handle result page request
// export const handleResultPageRequest = (req, res) => {
//   renderResultPage(res);
// };

// Function to handle database result request
export const handleDatabaseResultRequest = async (req, res) => {
  if (req.method === 'GET') {
    await getResultsData(req, res);
  } else if (req.method === 'POST') {
    await sendResultData(req, res);
  } else {
    res.writeHead(405, { "Content-type": "application/json" });
    res.end(JSON.stringify({ message: "Method not allowed" }), 'utf-8');
  }
};