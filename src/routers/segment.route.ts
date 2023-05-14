import express from 'express';
const segmentRouter= require('express').Router();
import {
    createSegment,
    updateSegment,
    deleteSegment,
    getAllSegments,
    getSegmentBySegmentId,
  } from "../controllers/segment.controller";
  



  segmentRouter.post("/", createSegment);
  segmentRouter.put("/:segmentID", updateSegment);
  segmentRouter.delete("/:segmentID", deleteSegment);
  segmentRouter.get("/getAll", getAllSegments);
  segmentRouter.get("/:segmentID", getSegmentBySegmentId);


module.exports = segmentRouter;