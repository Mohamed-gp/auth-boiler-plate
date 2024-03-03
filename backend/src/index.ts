import express, { Request, Response } from "express";
import dotenv from "dotenv"
import { connectToDB } from "./lib/connectToDB";
import cors from "cors"

dotenv.config()




connectToDB()
const app = express();

// import cors from "cors"
app.use(cors())





const PORT = 8080;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

