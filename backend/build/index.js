"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connectToDB_1 = require("./lib/connectToDB");
dotenv_1.default.config();
// import cors from "cors"
(0, connectToDB_1.connectToDB)();
const app = (0, express_1.default)();
app.get("", (req, res) => {
    const body = req.body;
    res.status(200).json({ message: "Hello world" });
});
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
