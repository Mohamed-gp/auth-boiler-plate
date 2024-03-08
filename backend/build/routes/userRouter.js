"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const toDosControllers_1 = require("../controllers/toDosControllers");
const router = (0, express_1.Router)();
router.route("/:id").post(toDosControllers_1.createToDo).delete(toDosControllers_1.deleteToDo);
exports.default = router;
