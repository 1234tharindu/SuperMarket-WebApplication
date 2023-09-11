const mongoose= require("mongoose");

const profileSchema = new mongoose.Schema({
    fristname:{
        type:String,
        required:true,   
    },

    lastname:{
        type:String,
        required:true,
    },

    Address:{
        type:String,
        required:true
    },
    Dateofbirth:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    }

})

const profile = new mongoose.model("PROFILE",profileSchema);


module.exports=profile;