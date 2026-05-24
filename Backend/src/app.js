const express = require('express');
const multer = require('multer'); // another middleware (for different data format)to handle file upload in express
const uploadFile = require("./services/storage.service")

const postModel = require("./models/post.model")
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() }) 

app.post('/create-post', upload.single("image"), async (req,res) =>{
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer)
   console.log(result);
    //saving to database
    const post = await postModel.create({
        image: result.url,
        caption : req.body.caption
    })
    return res.status(201).json({
        message: "post created successfully",
        post
    })
})
// data flow from server to frontend, jitni bhi post bana hai unko frontend ko bhejna hai taki frontend unko dikha sake
app.get("/posts", async (req, res) => {
   const posts = await postModel.find()

   return res.status(200).json({
    message: "Posts fetched successfully",
    posts 
   })
})

module.exports = app;