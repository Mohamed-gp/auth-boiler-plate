"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const toDosControllers_1 = require("../controllers/toDosControllers");
const authmiddleware_1 = require("../middlewares/authmiddleware");
const router = (0, express_1.Router)();
router.route("/:id").post(authmiddleware_1.verifyTokenAndUser, toDosControllers_1.createToDo).delete(toDosControllers_1.deleteToDo);
exports.default = router;
