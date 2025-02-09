export const iscnc = (req,res,next)=>{
    const role = req.body.role;
    if(role=="cnc"){
        next();
    }
    else{
        res.status(311);
        res.json({'error':'not a crc'});
    }
};