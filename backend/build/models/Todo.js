"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoValidator = exports.Todo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const toDoSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 50,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 50,
    },
    user: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });
const Todo = mongoose_1.default.models.Todo || mongoose_1.default.model("Todo", toDoSchema);
exports.Todo = Todo;
const toDoValidator = (obj) => {
    const Schema = joi_1.default.object({
        title: joi_1.default.string().trim().min(5).max(50).required(),
        description: joi_1.default.string().trim().min(5).max(50).required(),
        user: joi_1.default.string().hex().length(24)
    });
    return Schema.validate(obj);
};
exports.toDoValidator = toDoValidator;
