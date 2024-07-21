import { MongoClient } from 'mongodb'
import { dbName, mongoConnectionString } from '../envFiles/db.env.js'

let dbConnection
const client = new MongoClient(mongoConnectionString)

export default {
    connectToDb : (callback)=>{
        client.connect()
         .then(clientReturned=> {
            dbConnection = clientReturned
            return callback()
        })
         .catch(error=>console.log(error))
    },
    getDb : ()=> dbConnection.db(dbName),
}