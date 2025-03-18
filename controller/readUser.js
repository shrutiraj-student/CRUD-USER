//imorting user model
const User = require('../models/user.models')

//getAll users
const getAllUser = async(req,res) => {
    try{
        const user = await User.find({});
        res.status(200).json({
            message : 'get all user',
            data : user
        })
        
    }
    catch(err){
        res.status(404).json({
            message : message.err
        })
    }
}

//get user by Id


const getUserById = async(req,res) => {
    const id = req.params.id;
    try{
        const user = await User.findById({_id : id})
        //if id not found
        if(!user){
            res.status(404).json({
                success: false,
                message: "User not found",
                data: null,
            })
        }

        res.status(200).json({
            success : true,
            message : 'user found',
            data : user
        })
    }
    catch(err){
        console.error("Faild to Fetch Todo from ID");
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: err.message,
        })
    }
}

module.exports = {getAllUser,getUserById}

