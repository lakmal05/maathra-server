import express from 'express';
const segmentRouter= require('express').Router();
import {
    createSegment,
    updateSegment,
    deleteSegment,
    getAllSegment,
    getSegmentBySegmentId,
  } from "../controllers/Segment.controller";
  



  segmentRouter.post("/", createSegment);
  segmentRouter.put("/:segmentID", updateSegment);
  segmentRouter.delete("/:segmentID", deleteSegment);
  segmentRouter.get("/getAll", getAllSegment);
  segmentRouter.get("/:segmentID", getSegmentBySegmentId);


module.exports = segmentRouter;