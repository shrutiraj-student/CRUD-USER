const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxLength: 50,
        },
        
        email: {
            type: String,
            required: true,
            maxLength: 100,
        },
        age :{
            type : Number,
            maxLength : 3
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now(),  
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now(),
        },
    }
)

module.exports = mongoose.model("User", userSchema);