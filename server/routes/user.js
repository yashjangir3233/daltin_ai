import express from 'express'
import multer from 'multer';
import path from 'path'
import user from '../Schema/user.js';


const userRouter = express.Router();
var storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb) => {
        return cb(null,`${file.originalname.split('.')[0]}_${Date.now()}${path.extname(file.originalname)}`,);
    }
})

var upload = multer({storage:storage});



userRouter.post('/register',async (req,res) => {
    try{
        const data = req.body
        
        await user.create(data);
        res.status(200).json({msg:'user added successfully'})
    }catch(e){
        console.log(e.message)
        res.status(500).json({err:e.message,msg:'internal server error'})
    }
})

userRouter.post('/upload',upload.single('file'),async(req,res) => {
    try{
        const file = req.file
        res.status(200).json({msg:'file uploaded successfully',fileName:file.filename})
    }catch(e){
        console.log(e.message)
        res.status(500).json({err:e.message,msg:'internal server error for file upload'})
    }
})

export default userRouter

