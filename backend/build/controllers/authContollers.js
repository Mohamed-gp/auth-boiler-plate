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
exports.signUpContoller = exports.signInContoller = void 0;
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
/**
 * @desc signin old User
 * @route /auth/signin
 * @access public
 * @method POST
 */
const signInContoller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, User_1.signInValidator)(req.body);
    const { email, password } = req.body;
    if (error) {
        return res.status(400).json({
            message: error.details[0].message,
        });
    }
    try {
        const user = yield User_1.User.findOne({ email: email }).populate("todos");
        if (!user) {
            return res.status(400).json({ message: "User not found." });
        }
        const isValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isValid) {
            return res.status(400).json({ message: "Invalid email or password." });
        }
        return res.status(200).json({
            message: "Signin successful",
            data: user,
        });
    }
    catch (error) {
        console.error("Error in signInContoller:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
});
exports.signInContoller = signInContoller;
// we can wrap it in async handler express function and we will not use try catch
/**
 * @desc create a new user
 * @route /auth/signup
 * @access public
 * @method POST
 */
const signUpContoller = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, User_1.signUpValidator)(req.body);
    if (error) {
        return res.status(400).json({
            message: error.details[0].message,
        });
    }
    let user = yield User_1.User.findOne({
        email: req.body.email,
    });
    if (user) {
        return res.status(400).json({
            message: "somthing went wrong",
        });
    }
    user = yield User_1.User.create({
        email: req.body.email,
        password: yield bcrypt_1.default.hash(req.body.password, 10),
        username: req.body.username,
    });
    return res.status(201).json({
        message: "created succefuly",
        data: {
            _id: user._id,
            email: user.email,
            username: user.username,
        },
    });
});
exports.signUpContoller = signUpContoller;
