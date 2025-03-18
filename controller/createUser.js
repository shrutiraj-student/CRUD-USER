//importing User model 
const User = require('../models/user.models')

//post 
const postUser = async(req,res) => {
    const {name,email,age} = req.body;
    //if any required feild is not given
    if(!name || !email){
        res.send('All feilds are required')
    }
    //creating new user
    try{
        const newUser = await User.create({name,email,age});
        res.status(200).json({
            message : "new user created successfully",
            data : newUser
        })
    }
    catch(err){
        console.log("Error creating");
        console.log(err.message);
        
        // send a json response with an error flag
        res.status(500).json({
            status: false,
            data: "Server Error",
            message: err.message,
        })
    
    }
}

module.exports = postUser
