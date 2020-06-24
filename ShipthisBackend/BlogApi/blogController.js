const userBlogModel = require('./blogModel');

//Create Blog
exports.createBlog = (req,res)=>{
    console.log(req.file);
    var imageType = {
        contentType: req.file.mimetype,
        data:  req.file.buffer
     };
    const userBlog = new userBlogModel({
        blogTitle   : req.body.blogTitle,
        description : req.body.description,
        img_Url     : imageType
    });
    userBlog.save().then(data=>{
        res.send({
          Data:  data,
          msg : "Blog Created Successful"
        })
    }).catch(err =>{
        res.send({
            msg : "Blog is not Created Successful",
            Error : err
        });
    });
};
//Find all Blog
exports.findallBlog = (req , res)=>{
    userBlogModel.find().then(response =>{
        // console.log(response[0].img_Url.data)
        // console.log(res[9].img_Url.data)
        var array = [];
        for(var i=0;i<response.length;i++){
            var image = new Buffer(response[i].img_Url.data).toString("base64");
            var title = response[i].blogTitle;
            var description = response[i].description
            var contentType = response[i].img_Url.contentType;
            var _id = response[i]._id
            array.push({
                title:title,
                description:description,
                image:`data:${contentType};base64,`+image,
                _id : _id
            })
            
        }
        console.log(array)
        // console.log(base64Image)
        res.send({
            Data : array
           
        })
    }).catch(err=>{
        console.log(err)
        res.send({
            Error : err,
            msg : "Blog is not Find"
        })
    })
}

//Update Blog 
exports.updateBlog =(req , res)=>{
    console.log(req.body)
    if(req.body ){
       
        userBlogModel.findByIdAndUpdate(req.params._id,{
            blogTitle   :   req.body.blogTitle,
            description :   req.body.description,
           
        },{new  :   true}).then(data =>{
            if(data){
                res.send({
                    msg :   'Update Successful',
                    updatedData : data
                })
            }else{
                res.send({
                    msg :   'data is not Update'
                })
            }
        }).catch(err =>{
            res.send({
                msg : "Unsuccessful",
                error : err
            });
        });
    };
};

//delete Blog
exports.deleteBlog = (req , res) =>{
    userBlogModel.findByIdAndRemove(req.params._id).then(data =>{
        if(data){
            res.send({
                msg :  "Blog is Deleted",
                deleteData : data
            })
        }else{
            res.send({
                msg : 'data is not available for Remove'
            })
        }
    }).catch(err =>{
        res.send({
            msg: "error occuring due some reasons",
            error : err
        });
    });
};
