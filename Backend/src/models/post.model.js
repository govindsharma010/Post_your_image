const mongoose = require("mongoose");
// telling database how a post look like to store post into database
const postSchema = new mongoose.Schema({
    image: String, // stores url of image
    caption: String,
})

const postModel = mongoose.model("post", postSchema)

module.exports = postModel; 