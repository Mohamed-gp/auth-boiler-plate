import { NextFunction, Request, Response, response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  return req.cookies
  if (token) {
    try {
      const decodedPayload = jwt.verify(
        token,
        process.env.jwtPASSWORD as string
      );
      req.user = await User.findOne({ _id: decodedPayload.userId });
      next();
    } catch (error) {
      return res.status(400).json({ message: "access denied" });
    }
  } else {
    return res.status(401).json({
      message: "Unauthorized ,no token provided",
    });
  }
};

const verifyTokenAndUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user._id != req.params.id) {
      res.status(403).json({
        message: "access denied,only user himself",
      });
    }
    next();
  });
};

// i dont export verify token default because i can export others like is admin verify
export { verifyToken, verifyTokenAndUser };
