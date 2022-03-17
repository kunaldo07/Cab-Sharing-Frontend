const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(

{
    username:{
        type:String,
        required:true,
    },
    
    email: {
        type: String,
        required: true,
    },
      profilePic: {
        type: String,
        default: "",
    },
    source:{ 
        type: String,
        required: true,
    },

    destination:{
        type: String,
        required: true,
    },

    date:{
        type: String,
        required: true,
    },

    time:{ 
        type: String,
        required: true,
    },

    mobile:{ 
        type: Number
    },

    gender:{
        type:String,
        required: true,
    }


},
    { timestamps: true }


);

module.exports = mongoose.model("User", UserSchema);