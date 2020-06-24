const userRegModel = require('./RegisterUserModel');

//Create User
exports.createUser = (req , res)=>{
   
    const userReg = new userRegModel({
        userName    :   req.body.userName,
        password    :   req.body.password,
        DOB         :   req.body.DOB
    });

    userReg.save().then(data =>{
        res.send({
            msg : "Success",
            Data : data
        });
    }).catch(err =>{
        res.send({
            Error   : err,
            msg     : Unsuccessful
        });
    });
};

//Login User
exports.loginUser = (req , res) =>{
    userRegModel.findOne({
        _id : req.body._id
    }).then(data =>{
        if(data){
            if(data.userName == req.body.userName && data.password  == req.body.password){
                res.send({
                    msg : "Success",
                    userData : data
                })
            }else{
                res.send({
                    msg : "not Success"
                })
            }
        }else{
            res.send({
                msg : "login is not successful"
            })
        }
    }).catch(err =>{
        res.send({
            msg : "not Successfull",
            error : err
        });
    });
};
        
