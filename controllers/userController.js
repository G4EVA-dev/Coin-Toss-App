export const createUser = (db, req, res)=>{
    let data =''
    req.on('data', chunk=> data+= chunk);
    req.on('end', ()=>{
        db.collection('userThoughts')
         .insertOne(JSON.parse(data))
         .then(jsonResult=>{
                res.writeHead(201,{
                    "Content-type" : "application/json"
                })
                res.end(JSON.stringify(jsonResult), 'utf-8')
         })
         .catch(error=>{
                res.writeHead(201,{
                "Content-type" : "application/json"
                })
                res.end(JSON.stringify(error), 'utf-8')  
        })
    })
}