const express = require('express');
const app = express();
import novelRouter = require('./src/routers/novel.route')
import userRouter = require('./src/routers/user.router')
import segmentRouter = require('./src/routers/segment.route')
import loginRouter = require('./src/routers/login.router')
import poemsRouter= require('./src/routers/novel.route')
const jwt= require('./src/middleware/jwt');




app.use(express.json())
app.use(jwt)

// app.use('/api/novel',loginRouter,novelRouter);
app.use('/api/novel',novelRouter);
app.use('/api/user',jwt,userRouter);
app.use('/api/segment',segmentRouter);
app.use('/api/poems',poemsRouter);
app.use('/api',loginRouter);



const PORT= process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`server is runningg`);
    
})