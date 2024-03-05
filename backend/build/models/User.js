"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInValidator = exports.signUpValidator = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 50,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    // todos : [{ title: String, description: String }],
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });
userSchema.virtual("todos", {
    // new propertie : posts : []
    ref: "Todo", // reference to Post model
    foreignField: "user", // the foreign field in the todos model that point to the user
    localField: "_id", // get all post that have user == _id (in other way the where todos model point )
});
const User = mongoose_1.default.models.User || mongoose_1.default.model("User", userSchema);
exports.User = User;
const signInValidator = (obj) => {
    const Schema = joi_1.default.object({
        email: joi_1.default.string().trim().min(5).max(50).required(),
        password: joi_1.default.string().trim().min(8).required(),
    });
    return Schema.validate(obj);
};
exports.signInValidator = signInValidator;
const signUpValidator = (obj) => {
    const Schema = joi_1.default.object({
        username: joi_1.default.string().trim().min(5).max(20).required(),
        email: joi_1.default.string().trim().min(5).max(50).required(),
        password: joi_1.default.string().trim().min(8).required(),
    });
    return Schema.validate(obj);
};
exports.signUpValidator = signUpValidator;
