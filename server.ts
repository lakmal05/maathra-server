const express = require('express');
const app = express();
import novelRouter = require('./src/routers/novel.route')
import userRouter = require('./src/routers/user.router')
import segmentRouter = require('./src/routers/segment.route')
import loginRouter = require('./src/routers/login.router')



app.use(express.json())


app.use('/api/novel',loginRouter,novelRouter);
app.use('/api/user',userRouter);
app.use('/api/segment',segmentRouter);
app.use('/api',loginRouter);



const PORT= process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`server is runningg`);
    
})