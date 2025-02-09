const express = require("express") ;
const { auth } = require("../middleware/auth");

export const cncRou = express.Router();

cncRou.get('/',auth,iscnc,(req,res)=>{
    
})