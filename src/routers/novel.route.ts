import express from 'express';
const novelRouter= require('express').Router();
import {
    createNovel,
    updateNovel,
    deleteNovel,
    getAllNovels,
    getNovelByNovelId,
  } from "../controllers/novel.controller";
  



novelRouter.post("/", createNovel);
novelRouter.put("/:novelID", updateNovel);
novelRouter.delete("/:novelID", deleteNovel);
novelRouter.get("/getAll", getAllNovels);
novelRouter.get("/:novelID", getNovelByNovelId);


module.exports = novelRouter;