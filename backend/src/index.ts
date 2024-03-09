import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./lib/connectToDB";
import cors from "cors";
import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";
import { errorHandler, notFound } from "./middlewares/errormiddleware";
import cookieParser from "cookie-parser";

dotenv.config();

connectToDB();
const app = express();
app.use(cookieParser());
// to send body as form uncoded is not necessarily
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
// import cors from "cors"
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

// router

app.use("/auth", authRouter);
app.use("/api/todos", userRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
