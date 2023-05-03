const express=require('express');
const feedController=require('../controller/Feed')
const router=express.Router();

router.get('/posts',feedController.getAllPosts)
router.post('/createPost',feedController.createPost)

module.exports=router;