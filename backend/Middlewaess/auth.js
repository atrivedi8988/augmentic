

exports.isAuthenticate = async(req,res,next)=>{
    console.log(req.headers.token)
    next()
}


exports.isAdmin = async(req,res,next)=>{
    
}

