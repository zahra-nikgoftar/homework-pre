const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name:{
        type:String,
        require:[true,"name is required!!"]
    },
    age:{
        type:String
    },
    gender:{
        type:String
    },
    exp: {  
        type: Number,  
        required: true,  
        min: 0  
      },  
      type: {  
        type: String,  
        required: true,  
        enum: ['Full Time', 'Part Time']  
      },  
      qualification: {  
        type: String,  
        required: true  
      }, 
})

const userModel = model("user", userSchema);
module.exports = userModel;