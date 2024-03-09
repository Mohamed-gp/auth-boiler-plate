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
exports.editUserProfile = exports.getUserProfile = exports.logOut = exports.signUpContoller = exports.signInContoller = void 0;
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateToken_1 = require("../utils/generateToken");
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
        (0, generateToken_1.generateToken)(res, user._id);
        return res.status(200).json({
            message: "Sign In successful",
            data: {
                id: user._id,
                email: user.email,
                username: user.username,
                todos: user.todos
            }
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
    (0, generateToken_1.generateToken)(res, user._id);
    return res.status(201).json({
        message: "created succefuly",
        data: {
            id: user._id,
            email: user.email,
            username: user.username,
            todos: user.todos
        }
    });
});
exports.signUpContoller = signUpContoller;
/**
 * @desc logout user
 * @route /auth/profile
 * @access private with cookie token verifcation
 * @method POST
 */
const editUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, User_1.updateUserValidator)(req.body);
    if (error) {
        return res.status(400).json({
            message: error.details[0].message,
        });
    }
    const user = yield User_1.User.findById(req.user._id);
    if (user) {
        user.email = req.body.email || user.email;
        user.username = req.body.username || user.username;
        if (req.body.password) {
            user.password = yield bcrypt_1.default.hash(req.body.password, 10);
        }
        const updatedUser = yield user.save();
        return res.status(200).json({
            message: "succefuly user updated information",
            data: {
                id: user._id,
                email: user.email,
                username: user.username,
            }
        });
    }
    else {
        return res.status(404).json({ message: "user not Found" });
    }
});
exports.editUserProfile = editUserProfile;
/**
 * @desc logout user
 * @route /auth/profile
 * @access private with cookie token verifcation
 * @method POST
 */
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        id: req.user._id,
        email: req.user.email,
        username: req.user.username,
        todos: user.todos
    };
    return res.status(200).json({
        data: user,
    });
});
exports.getUserProfile = getUserProfile;
/**
 * @desc logout user
 * @route /auth/logout
 * @access public
 * @method POST
 */
const logOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    return res.status(200).json({
        message: "user logged out",
    });
});
exports.logOut = logOut;
