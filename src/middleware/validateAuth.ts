// import db from "../db";
import { NextFunction, Request, Response } from "express";
// import { verify } from "../utils/jwt";
import { getAuth } from "firebase-admin/auth";
import { RowDataPacket } from "mysql2";
import { JwtPayload } from "jsonwebtoken";
// import logger from "../utils/logger";

// export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
//     if (!req.headers.authorization) {
//         return res.status(401).json({ error: "No Token" });
//     }

//     if (!req.headers.authorization.startsWith("Bearer ")) {
//         return res.status(401).json({ error: "Bad Auth" });
//     }

//     const token = req.headers.authorization.split(" ")[1];

//     const decodedToken = verify(token);

//     if (!decodedToken) {
//         return res.status(403).json({ error: "Invalid or expired token" });
//     }

//     const id = (decodedToken as JwtPayload).user.id;

//     const [foundUser] = (await db.execute("SELECT * FROM user WHERE id = ? AND status = 'ACTIVE'", [
//         id,
//     ])) as RowDataPacket[];

//     if (foundUser.length < 1) {
//         return res.status(401).json({ error: "Unauthorized" });
//     }

//     req.user = {
//         id: parseInt(foundUser[0].id),
//         email: foundUser[0].email,
//         userLevel: foundUser[0].user_type,
//     };

//     next();
// };

export const checkAuthApp = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        console.log("No Token");

        return res.status(403).json({ error: "No Token" });
    }

    if (!req.headers.authorization.startsWith("Bearer ")) {
        console.log("Bad Auth");
        return res.status(403).json({ error: "Bad Auth" });
    }

    const token = req.headers.authorization.split(" ")[1];

    const auth = getAuth();

    try {
        const decodedToken = await auth.verifyIdToken(token, true);

        req.user = { uid: decodedToken.uid, email: decodedToken.email };

        next();
    } catch (err) {
        logger.error(err);
        return res.status(403).json({ error: "Unauthorized" });
    }
};
