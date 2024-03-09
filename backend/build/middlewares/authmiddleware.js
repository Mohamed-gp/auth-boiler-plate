"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenAndUser = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.jwt;
    if (token) {
        try {
            const decodedPayload = jsonwebtoken_1.default.verify(token, process.env.jwtPASSWORD);
            req.user = yield User_1.User.findOne({ _id: decodedPayload.userId });
            next();
        }
        catch (error) {
            return res.status(400).json({ message: "access denied" });
        }
    }
    else {
        return res.status(401).json({
            message: "Unauthorized ,no token provided",
        });
    }
});
exports.verifyToken = verifyToken;
const verifyTokenAndUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user._id != req.params.id) {
            res.status(403).json({
                message: "access denied,only user himself",
            });
        }
        next();
    });
};
exports.verifyTokenAndUser = verifyTokenAndUser;
