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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToDo = exports.getAllToDosByID = void 0;
const Todo_1 = require("../../models/Todo");
const getAllToDosByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    return res.status(200).json({
        message: id,
    });
});
exports.getAllToDosByID = getAllToDosByID;
const createToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { error } = (0, Todo_1.toDoValidator)(Object.assign(Object.assign({}, req.body), { user: id }));
    if (error) {
        return res.status(200).json({ message: error.details[0].message });
    }
    const todo = yield Todo_1.Todo.create({
        title: req.body.title,
        description: req.body.description,
        user: id,
    });
    return res.status(201).json({ message: "created succefuly", data: todo });
});
exports.createToDo = createToDo;
