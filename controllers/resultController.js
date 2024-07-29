import fs from 'fs'
import { ObjectId } from 'mongodb'
import url from 'url'

export const getResultPage = (res)=>{
    let filePath = './dist/result.html'

    fs.readFile(filePath, (error,data)=>{
        if(error){
            console.log("error :", error)
        }else{
            res.writeHead(200,{ "Content-type":"text/html"})
            res.end(data, 'utf-8')
        }
    })
}

export const getResultsData = (db,req,res)=>{
    let ID = url.parse(req.url,true).query.id
    const dbID = new ObjectId(ID)

    db.collection("results")
     .findOne({_id : dbID})
     .then(doc => {
        res.writeHead(200, {
            "Content-type": "application/json"
        })
        res.end(JSON.stringify(doc),'utf-8')
     })
}