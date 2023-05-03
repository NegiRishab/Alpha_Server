exports.getAllPosts=(req,res,next)=>{
res.status(200).json({tiltle:"i am Alpha",content:'i will become a pro developer'})
}

exports.createPost=(req,res,next)=>{
    const title=req.body.title;
    const content=req.body.content;
    res.status(201).json({
        message:'Post created Succesfully',
        Posts:{id:new Date().toISOString(),title:title,content:content}
    })
}