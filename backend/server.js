import express from 'express';
import dbCon from './utils/db.js';
import dotenv from 'dotenv';
import routers from './routes/routes.js';
import cors from 'cors'
dotenv.config();

const app = express();

dbCon();

app.use(express.json())
app.use(cors())
app.use('/api', routers)
app.listen(process.env.PORT, () => {
    console.log("Server is running")
})