const userRouter = require('express').Router();
import {createUser,getAllUsers} from '../controllers/user.controller'



userRouter.post('/create',createUser);
userRouter.get('/getAll',getAllUsers);





module.exports= userRouter;