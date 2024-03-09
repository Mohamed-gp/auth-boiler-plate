"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connectToDB_1 = require("./lib/connectToDB");
const cors_1 = __importDefault(require("cors"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const errormiddleware_1 = require("./middlewares/errormiddleware");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
(0, connectToDB_1.connectToDB)();
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
// to send body as form uncoded is not necessarily
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// import cors from "cors"
app.use((0, cors_1.default)({
    credentials: true,
    origin: true,
}));
// router
app.use("/auth", authRouter_1.default);
app.use("/api/todos", userRouter_1.default);
app.use(errormiddleware_1.notFound);
app.use(errormiddleware_1.errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
