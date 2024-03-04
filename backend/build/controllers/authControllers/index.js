"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpContoller = exports.signInContoller = void 0;
const express_1 = require("express");
const User_1 = require("../../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
/**
 * @desc signin old User
 * @route /auth/signin
 * @access public
 * @method POST
 */
const signInContoller = (req, res, next) => {
    const { error } = (0, User_1.signInValidator)(req.body);
    const { email, password } = req.body;
    if (error) {
        return express_1.response.status(400).json({
            message: error.details[0].message,
        });
    }
    const user = yield User_1.User.findOne({ email: email });
    if (!user) {
        return res.status(400).json({ message: "somthing went wrong" });
    }
    const isValid = yield bcrypt_1.default.compare(password, user.password ?  : );
};
exports.signInContoller = signInContoller;
/**
 * @desc signin old User
 * @route /auth/signup
 * @access public
 * @method POST
 */
const signUpContoller = (req, res, next) => {
    const { error } = (0, User_1.signUpValidator)(req.body);
    const { email, password, username } = req.body;
    if (error) {
        return express_1.response.status(400).json({
            message: error.details[0].message,
        });
    }
    let user = yield User_1.User.findOne({ email: email });
    if (user) {
        return res.status(400).json({ message: "somthing went wrong" });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    user = yield User_1.User.create({
        email,
        username,
        password: hashedPassword
    });
    return res.status(201).json({ message: "created succefuly", data: user });
};
exports.signUpContoller = signUpContoller;
