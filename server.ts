const express = require('express');
const app = express();
import novelRouter = require('./src/routers/novel.route')
import userRouter = require('./src/routers/user.router')
app.use(express.json())


app.use('/api/novel',novelRouter);
app.use('/api/user',userRouter);



const PORT= process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`server is runningg`);
    
})