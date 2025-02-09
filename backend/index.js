import exppress from 'express'

const app = new exppress();


app.use('api/cnc');
app.use('api/part');
app.use('api/data');


app.listen(process.env.PORT||3000,()=>{
    console.log("server runnig at",process.env.PORT||3000);
})