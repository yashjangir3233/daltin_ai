// import express from 'express'
// import cors from 'cors'
// import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
// import userRouter from './routes/user.js'


// // const URL =`mongodb+srv://maajack676:mongodbkapassword@cluster0.5olym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// // const mongoConnection = async () => {
// //     try{
// //         await mongoose.connect(URL)
// //         console.log('database connected successfully')
// //     }catch(e){
// //         console.log(e.message)
// //     }
// // }
// // mongoConnection();
// const app = express();

// app.use(cors());
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json({extended:true}));
// app.get('/',(req,res)=>{
//     res.json('hello');
// })
// app.use(userRouter)

// app.use('/fileview',express.static('./upload/images'));

// app.listen(4000,() => {
//     console.log('server running on port 4000')
// })

// const express = require('express');
import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'

const app = express()
const PORT = 8000

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

app.use('/',userRouter)

app.get('/', (req, res) => {
  res.send('Hello World updated again')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})