const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const router = express.Router();

let refreshTokens=[];



export const login =async (req,res) => {
    
    console.log("login req resived from router")
   

    const username = req.body.username;
    const user= {name:username};

    const accesstoken= jwt.sign(user,process.env.TOKEN_KEY,{expiresIn:'5s'});
    const refreshToken= jwt.sign(user,process.env.TOKEN_KEY,{expiresIn:'24h'});

    refreshTokens.push(refreshToken)
    res.send({accesstoken,refreshToken})    
   
   }


   export const refresh =async (req,res) =>{
    const refreshToken = req.body.refreshToken;
    if(refreshToken==null)res.sendStatus(401);
    if(!refreshToken.includes(refreshToken))res.sendStatus(403);
    jwt.verify(refreshToken,process.env.RE_TOKEN_KEY,(err,user)=>{
        if(err)res.sendStatus(403);
  
        const accesstoken= jwt.sign({name:user.username},process.env.TOKEN_KEY,{expiresIn:'5s'});
        res.send({accesstoken})
    });


   }
   