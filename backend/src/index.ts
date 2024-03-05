import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./lib/connectToDB";
import cors from "cors";
import { authRouter } from "./routes/auth/authRouter";
import { toDosRouter } from "./routes/todos/toDosRouter";

dotenv.config();

connectToDB();
const app = express();
app.use(express.json())
// import cors from "cors"
app.use(cors());



// router 


app.use("/auth",authRouter)
app.use("/todos",toDosRouter)

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
