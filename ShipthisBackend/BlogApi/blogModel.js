var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
    blogTitle   :{
        type : String
    },
    description :{
        type : String
    },
    img_Url :{
        data       : Buffer,
       contentType : String
    }
});

module.exports = mongoose.model('userBlog' ,blogSchema); //userBlog is collection Name