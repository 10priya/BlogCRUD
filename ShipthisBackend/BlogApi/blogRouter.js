const userBlogContoller = require('./blogController');
const express = require('express');
const router = express.Router();
const upload  = require('../middleware');

router.post('/createBlog',upload.single('img_Url'),userBlogContoller.createBlog);
router.get('/findallBlog' ,userBlogContoller.findallBlog);
router.put('/updateBlog/:_id' ,upload.single('img_Url'), userBlogContoller.updateBlog);
router.delete('/deleteBlog/:_id' , userBlogContoller.deleteBlog);

module.exports  =  router;