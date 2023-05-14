import express from 'express';
const loginRouter= require('express').Router();
import {login}from '../auth/login';

loginRouter.post('/login',login);


module.exports=loginRouter;
