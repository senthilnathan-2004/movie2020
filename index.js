import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import { connectDb } from "./database/connectDb.js"
import {router} from './routes/route.js'
import { auth } from "./middleware/auth.js"

dotenv.config()
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors())
app.use(helmet())

//router
app.use('/movie',auth,router)


app.listen(port,()=>{
 console.log("server is running")
 connectDb()
})