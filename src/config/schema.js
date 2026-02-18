import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        min : 3,
        max : 20
    },
    password : {
        type : String,
        required : true,
        minlength : 8
    }
})
const userModel = new mongoose.model('user', userSchema)
export default userModel;