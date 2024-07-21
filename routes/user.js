import { createUser } from "../controllers/userController.js";

export const handleUserRoutes = (req, res, db)=>{
    if (req.method === 'GET' && req.url === '/user') {
        // getUsers(req, res);
    } else if (req.method === 'POST' && req.url === '/user') {
        createUser(db, req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User route not found' }));
    }
}