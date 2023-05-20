import { Request, Response } from "express";
const {
  create,
  getAll,
  deleteP,
  update,
  getByPoemId,
} = require("./poems.service");

export const createPoem = async (req: Request, res: Response) => {
  const body = req.body;
  create(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(404).json({
        success: 0,
        messege: "error",
        data: results,
      });
    } else {
      console.log(results);
      return res.status(200).json({
        success: 1,
        messege: results,
      });
    }
  });
};

export const getAllPoem = async (req: Request, res: Response) => {
  getAll((err, results) => {
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

export const deletePoem = async (req: Request, res: Response) => {
  const data = req.body;
  deleteP(data, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.status(404).json({
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

export const updatePoem = async (req: Request, res: Response) => {
  const body = req.body;
  update(body, (err, results) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.status(200).json({
        success: 1,
        data: results,
      });
    }
  });
};

export const getPoemByPoemId = async (req: Request, res: Response) => {
  const body = req.body;
  getByPoemId(body, (err, results) => {
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
        succes: 1,
        data: results,
      });
    }
  });
};
