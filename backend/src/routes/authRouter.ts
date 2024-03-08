import { Router } from "express";
import {
  signInContoller,
  signUpContoller,
} from "../controllers/authContollers";

const router = Router();

router.route("/signin").post(signInContoller);

router.route("/signup").post(signUpContoller);

export default router;
