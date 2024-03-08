"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authContollers_1 = require("../controllers/authContollers");
const router = (0, express_1.Router)();
router.route("/signin").post(authContollers_1.signInContoller);
router.route("/signup").post(authContollers_1.signUpContoller);
exports.default = router;
