import { Router } from "express";
import { auth } from "../middleware/auth";

const cncRou = Router();

cncRou.get('/',auth,(req,res)=>{
    
})