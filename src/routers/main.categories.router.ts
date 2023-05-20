import { Router } from "express";
const mainCategoriesRouter = require('express');

import{createMainCategorie,getMainCategories,updateMainCategorie,deleteMainCategorie}from '../controllers/main.categories.controller'



mainCategoriesRouter.post("/", createMainCategorie);
mainCategoriesRouter.get("/", getMainCategories);
mainCategoriesRouter.put("/:id", updateMainCategorie);
mainCategoriesRouter.delete("/:id", deleteMainCategorie);





module.exports = mainCategoriesRouter;