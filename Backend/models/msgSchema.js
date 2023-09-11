const mongoose= require("mongoose");

const msgSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,   
    },

    email:{
        type:String,
        required:true,
    },

    message:{
        type:String,
        required:true
    }
})

const Message = new mongoose.model("MESSAGE",msgSchema);


module.exports=Message;