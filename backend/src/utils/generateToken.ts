import jwt from "jsonwebtoken";
import { Response } from "express";

/**
 * Generates a JWT token and sets it as a cookie in the response.
 * @param res - The response object.
 * @param userId - The user ID to include in the token payload.
 */
const generateToken = (res: Response, userId : string) => {
  const token = jwt.sign({ userId }, process.env.jwtPASSWORD as string, {
    expiresIn: "30d",
  });
  res.cookie("jwt", token,{
    secure: process.env.NODE_ENV == "production" ? true : false, // https in production
    httpOnly: true, // to prevent getting token with javascript in client side
    sameSite: "strict", // to prevent cfe attack
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 day in meliseconds
  });
};


export { generateToken };
