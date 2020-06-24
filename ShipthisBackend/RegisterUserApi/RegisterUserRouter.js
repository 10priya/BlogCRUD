const userRegController =   require('./RegisterUserController');
const express = require('express');
const router = express.Router();

router.post('/createUser',userRegController.createUser);
router.post('/login',userRegController.loginUser);
module.exports = router;