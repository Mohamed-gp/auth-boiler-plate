"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const authContollers_1 = require("../../controllers/authControllers/authContollers");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.route("/signin").post(authContollers_1.signInContoller);
authRouter.route("/signup").post(authContollers_1.signUpContoller);
