import express from "express"
const app = express();
import cors from "cors"
import DB from "./db"
import {profile} from "./routes/profileRoutes"
DB().catch((err)=>console.log(err))

app
.use(cors())
.use(express.json())
.use(express.urlencoded({extended:true}))

app.use("/",profile)

app.get('/ami',(req,res)=>{
    res.json({status:"ok", message:"it works"})
})


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})