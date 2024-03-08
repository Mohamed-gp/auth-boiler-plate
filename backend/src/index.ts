import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./lib/connectToDB";
import cors from "cors";
import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";
import { errrorHandler, notFound } from "./middlewares/errormiddleware";

dotenv.config();

connectToDB();
const app = express();
app.use(express.json());
// import cors from "cors"
app.use(cors());

// router

app.use("/auth", authRouter);
app.use("/api/todos", userRouter);

app.use(notFound);
app.use(errrorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
