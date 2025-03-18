const User = require('../models/user.models')

//delete
const deleteUser = async(req,res) => {
    //const {id} = req.params
    const id = req.params.id;
    //deleting user by id
    try{
        const user = await User.findByIdAndDelete({_id : id});
        //if id not found
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found",
                data: null,
            });
        }
        else{
            return res.status(200).json({
                success: true,
                message: "User deleted successfully",
                data: user,
            });
        }
    }
    catch(err){
        console.error("Server error: " + err.message);
        res.status(500).json({
            success: false,
            message: "Server Error Detected",
            data: null,
        });
    }
}
module.exports = deleteUser