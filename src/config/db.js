import mongoose from "mongoose";


export default function connectDB(){
return mongoose.connect('mongodb://localhost')
.then(()=>console.log('Db connected successfully'))
.catch((ex)=>console.log('problem connecting Db', ex.message))
}
