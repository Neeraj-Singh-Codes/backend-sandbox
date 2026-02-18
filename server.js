import app from "./src/index.js";
import connectDB from "./src/config/db.js";

const PORT = 3000
connectDB()
.then(()=>{
    app.listen(PORT , ()=>{
        console.log(`Listening on ${PORT}`)
    })
})
.catch((ex)=>{
    console.log(ex.message)
})
