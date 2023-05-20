import express from "express";
const poemsRouter = require("express").Router();


poemsRouter.post("/", createPoem);
poemsRouter.put("/:PoemId", updatePoem);
poemsRouter.delete("/:PoemId", deletePoem);
poemsRouter.get("/", getAllPoem);
poemsRouter.get("/:PoemId", getPoemByPoemId);
