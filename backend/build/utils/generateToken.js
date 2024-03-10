"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * Generates a JWT token and sets it as a cookie in the response.
 * @param res - The response object.
 * @param userId - The user ID to include in the token payload.
 */
const generateToken = (res, userId) => {
    const token = jsonwebtoken_1.default.sign({ userId }, process.env.jwtPASSWORD, {
        expiresIn: "30d",
    });
    res.cookie("jwt", token, {
        secure: process.env.NODE_ENV == "production" ? true : false, // https in production
        httpOnly: true, // to prevent getting token with javascript in client side
        sameSite: "strict", // to prevent cfe attack
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 day in meliseconds
    });
};
exports.generateToken = generateToken;
