"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connectToDB_1 = require("./lib/connectToDB");
const cors_1 = __importDefault(require("cors"));
const authRouter_1 = require("./routes/auth/authRouter");
dotenv_1.default.config();
(0, connectToDB_1.connectToDB)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// import cors from "cors"
app.use((0, cors_1.default)());
// router 
app.use("/auth", authRouter_1.authRouter);
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
