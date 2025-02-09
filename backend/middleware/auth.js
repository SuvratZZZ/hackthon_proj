import { verify } from 'jsonwebtoken';


export const auth = async (req,res,next)=>{

    const authHeader = req.header('Authorization');
    
    if (!authHeader) {
        c.json({ message: 'Unauthorized' }, 401)
        return c.json({ message: 'Unauthorized' }, 401)
    }

    const token = authHeader.split(' ')[1]; 
    console.log("tis is -> ",token)
    if(!token){
        res.status(403);
        console.log("no-token");
        return res.json({error : "No Token"});
    }

    if(await verify( token ,c.env.JWT_S)){
        console.log("verifed");
        await next();
    }else{
        res.status(403);
        return res.json({error : "unauthorised"});
    }
}