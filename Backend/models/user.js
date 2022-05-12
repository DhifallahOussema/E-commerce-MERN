import mongoose from "mongoose"
var userSchema = mongoose.Schema({
    nom:{
        type:String,
        required:true,
    } ,
    
    email:{
        type:String,
        required:true,
        unique:true
    } ,
    password:{
        type:String,
        required:true
    } ,
    role:{
        type:String,
        required:true,
    }
    
});
const User=mongoose.model('User',userSchema)
    export default User
