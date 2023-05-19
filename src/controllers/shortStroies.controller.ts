import { Request, Response} from "express";
const {
  create,
  getAll,
  update,
  deleteS,
  getBySegmentId,
} = require("../services/segment.service");

export const createShortStorie = async (req: Request, res: Response) => {
  console.log("req resived from router");

  const body = req.body;
  create(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        data: results,
      });
    } else {
      return res.status(200).json({
        success: 1,
        data: results,
      });
    }
  });
};

export const getAllShortStorie  = async (req: Request, res: Response) => {
  console.log("Get All req Resevid");

  getAll((err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        data: "error",
      });
    } else {
      return res.status(200).json({
        success: 1,
        data: results,
      });
    }
  });
};

export const deleteShortStorie  = async (req: Request, res: Response) => {
    console.log("delte funciton called");
    
  const data = req.body;
  deleteS(data, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.json({
        success: 0,
        messege: "Not found",
      });
    } else {
      return res.status(200).json({
        success: 1,
        messege: "successfully",
      });
    }
  });
};

export const updateShortStorie  = async (req: Request, res: Response) => {
  console.log("updateNovel req resived form router");

  const body = req.body;
  update(body, (err, results) => {
    if (err) {
      console.log(err);
      return;
    } else {
      return res.status(200).json({
        success: 1,
        data: results,
        message: "successful",
      });
    }
  });
};

export const getShortStorieByShortStorieId = async (req: Request, res: Response) => {
  const id = req.params.segmentID;
  getByShortStorie(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.status(404).json({
        success: 0,
        messege: "Recode Not Found",
      });
    } else {
      return res.status(200).json({
        success: 1,
        data: results,
      });
    }
  });
};
