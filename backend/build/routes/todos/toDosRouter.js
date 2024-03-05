"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDosRouter = void 0;
const express_1 = require("express");
const toDosControllers_1 = require("../../controllers/toDosControllers/toDosControllers");
const toDosRouter = (0, express_1.Router)();
exports.toDosRouter = toDosRouter;
toDosRouter.route("/:id").get(toDosControllers_1.getAllToDosByID);
toDosRouter.route("/:id").post(toDosControllers_1.createToDo);
