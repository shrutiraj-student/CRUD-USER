const User = require('../models/user.models')

//put

const updateUser = async(req,res) => {

    try{
        const id = req.params.id;
        const {name,email,age} = req.body
        const updatedUser = await User.findByIdAndUpdate({_id : id},
            {name,email,age,updatedAt : Date.now()}
        )
       
        //if id is incorrect
        if(!updateUser){
            return res.status(404).json({
                success: false,
                message: "User not found",
                data: null,
            })
        }
        else{
            return res.status(200).json({
                success: true,
                message: "User updated successfully",
                data: updatedUser,
            })
        }
    }
    catch(err) {
        res.status(500).json({
            success: false,
            message: "Unable to update Todo",
            data: null,
        })
    }
}

module.exports = updateUser