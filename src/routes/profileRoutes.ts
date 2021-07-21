import { Router } from "express";
import profileController from "../controller/profileController"
const profile = Router();

profile.get('/',(req,res)=>{
    let str :string =""
    str += profileController.hello()
    str += " " +  profileController.bye()
    res.send(str!)
})

export {profile}