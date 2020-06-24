//Require Module
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRegRouter = require('./RegisterUserApi/RegisterUserRouter');
const userBlogRouter = require('./BlogApi/blogRouter');
//create port
const port = process.env.port ||2000 

    //Use Module
//Use Express
const app = express(); 
//Use Cors
app.use(cors());       
//Use body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//mongodb database URL
const url ='mongodb://127.0.0.1:27017/UserRegistration';
 //mongodb database connection
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},function(){
    console.log('Database Connected Successfully');
});

// Use userRoutes
app.use('/',userRegRouter);

// Use userBlogRoutes
app.use('/',userBlogRouter);

//create server
app.listen(port , function(){
    console.log('port is working');
})