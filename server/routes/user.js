import express from 'express'
import multer from 'multer';
import path from 'path'
import user from '../Schema/user.js';
import mongoose from 'mongoose';

const userRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const fileSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    data: Buffer,
});

const File = mongoose.model('File', fileSchema);
// var storage = multer.diskStorage({
//     destination:'./upload/images',
//     filename:(req,file,cb) => {
//         return cb(null,`${file.originalname.split('.')[0]}_${Date.now()}${path.extname(file.originalname)}`,);
//     }
// })

// var upload = multer({storage:storage});



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
        const file = req.file;

        if (!file) {
            return res.status(400).json({ msg: 'No file uploaded' });
        }

        // Create a new File document with the file's binary data
        const newFile = new File({
            filename: file.originalname,
            contentType: file.mimetype,
            data: file.buffer,
        });

        await newFile.save();
        res.status(200).json({ msg: 'File uploaded successfully', fileId: newFile._id });
    }catch(e){
        console.log(e.message)
        res.status(500).json({err:e.message,msg:'internal server error for file upload'})
    }
})

export default userRouter

