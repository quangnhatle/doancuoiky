const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
     gmail:{
        type:String,
        require:true,
    },
     age:{
        type:Number,
        require:true,
    },
     address:{
        type:String,
        require:true,
    }
});

module.exports = mongoose.model(
    "UserModel",
    userSchema
)