const express = require("express");
const app = express();
import { Request, Response } from "express";
const admin = require("firebase-admin");
const credentials = require("../account/accountKey.json");
const { create, getAll } = require("../services/user.service");
const uuid = require("uuid");

const uniqeId = uuid.v4();

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = admin.firestore();

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

export const createUser = async (req: Request, res: Response) => {
  console.log("reqest resived form router");
  console.log(req.body);

  //getvalues form Front-End
  const porfile = {
    userName: req.body.userName,
    mobileNumber: req.body.mobileNumber,
    uniqeId: uniqeId,
    email: req.body.email,
  };

  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  if (porfile.email == null) {
    console.log("please enter valid details");
    res.status(404).json({ messege: "enter valid details" });
  }
  if (uuid == null) {
    res.status(403).json({ messege: "Try Again" });
  }
  //check uuid alredy exist in my sql database
  // if () {  }
    else {
    const userResponse = await admin.auth().createUser({
      email: user.email,
      password: user.password,
      emailVerified: false,
      disabled: false,
    });
    res.json(userResponse);

    create(porfile, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succsess: 0,
          data: results,
        });
      } else {
        return res.status(200).json({
          data: results,
        });
      }
    });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  console.log("getAll req resived from router");

  getAll((err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        data: "ERR",
      });
    } else {
      return res.status(200).json({
        success: 1,
        data: results,
      });
    }
  });
};
