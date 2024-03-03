"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDB = () => {
    try {
        mongoose_1.default.connect(process.env.DB_URI);
        console.log("connect succefully to db");
    }
    catch (error) {
        console.log(error);
    }
};
exports.connectToDB = connectToDB;
