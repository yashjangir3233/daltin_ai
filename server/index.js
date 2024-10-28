// import express from 'express'
// import cors from 'cors'
// import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
// import userRouter from './routes/user.js'


// const URL =`mongodb+srv://maajack676:mongodbkapassword@cluster0.5olym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// const mongoConnection = async () => {
//     try{
//         await mongoose.connect(URL)
//         console.log('database connected successfully')
//     }catch(e){
//         console.log(e.message)
//     }
// }
// mongoConnection();
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


import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'

const URL = `mongodb+srv://maajack676:mongodbkapassword@cluster0.5olym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}));

app.get('/', async (req, res) => {
    // Connect to MongoDB for each request
    try {
        await mongoose.connect(URL)
        res.json('hello');
    } catch (e) {
        res.status(500).json({ error: 'Database connection failed' });
    } finally {
        // Close the connection after the request is handled
        await mongoose.connection.close();
    }
})

app.use(userRouter)

app.use('/fileview', express.static('./upload/images'));

// Export the Express app
export default app;