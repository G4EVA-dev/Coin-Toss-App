// import { MongoClient } from 'mongodb'
// import { dbName, mongoConnectionString } from '../envFiles/db.env.js'

// let dbConnection
// const client = new MongoClient(mongoConnectionString)

// export default {
//     connectToDb : (callback)=>{
//         client.connect()
//          .then(clientReturned=> {
//             dbConnection = clientReturned
//             return callback()
//         })
//          .catch(error=>console.log(error))
//     },
//     getDb : ()=> dbConnection.db(dbName),
// }

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { dbName, mongoConnectionString } from '../envFiles/db.env.js';

dotenv.config();

let database;

const connectToDb = async (callback) => {
  const client = new MongoClient(mongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  database = client.db(dbName);
  callback();
};

const getDb = () => database;

export default { connectToDb, getDb };