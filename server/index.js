import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'

dotenv.config()

const username = process.env.USERNAME
const password = process.env.PASSWORD
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}));
app.use(userRouter)

app.use('/fileview',express.static('./upload/images'));

const URL =`mongodb+srv://maajack676:mongodbkapassword@cluster0.5olym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const mongoConnection = async () => {
    try{
        await mongoose.connect(URL)
        console.log('database connected successfully')
    }catch(e){
        console.log(e.message)
    }
}
mongoConnection();
app.listen(4000,() => {
    console.log('server running on port 4000')
})