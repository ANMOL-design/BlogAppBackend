// Importing Express
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const PORT = 3001;
const ArticleData = require('./JSONDATA/ArticleData.json')
const BlogData = require('./JSONDATA/PageData.json')
const finalData = require('./JSONDATA/PagePostFinal.json')

const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
    // mongoose.connect(
    //     process.env.MONGODB_CONNECTION_STRING, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,

//     },
//     (err) => {
//         if (err) throw err;
//         console.log("MongoDB connection established");
//     }
// );

//Articles
app.get('/', (req, res) => {
    res.send(ArticleData);
})

app.get('/Blogs', (req, res) => {
    res.send(BlogData);
})

app.get('/final', (req, res) => {
    res.send(finalData);
})

app.listen(PORT, () => {
    console.log("Server is Running on port " + PORT);
})