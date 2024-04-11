import express from "express";
import { Creatuser, Getuser, UpdateUser, DeleteUser } from "../controller/userController.js";

const routers = express.Router();

routers.post('/create', Creatuser)
routers.get('/get', Getuser)
routers.put('/update/:id', UpdateUser)
routers.delete('/delete/:id', DeleteUser)

export default routers