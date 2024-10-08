"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authContollers_1 = require("../controllers/authContollers");
const authmiddleware_1 = require("../middlewares/authmiddleware");
const router = (0, express_1.Router)();
router.route("/signin").post(authContollers_1.signInContoller);
router.route("/signup").post(authContollers_1.signUpContoller);
router.route("/profile").get(authmiddleware_1.verifyToken, authContollers_1.getUserProfile).put(authmiddleware_1.verifyToken, authContollers_1.editUserProfile);
router.route("/logout").post(authContollers_1.logOut);
exports.default = router;
