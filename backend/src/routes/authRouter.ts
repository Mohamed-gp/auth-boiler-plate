import { Router } from "express";
import {
  editUserProfile,
  getUserProfile,
  logOut,
  signInContoller,
  signUpContoller,
} from "../controllers/authContollers";
import { verifyToken } from "../middlewares/authmiddleware";
 
const router = Router();

router.route("/signin").post(signInContoller);

router.route("/signup").post(signUpContoller);
router.route("/profile").get(verifyToken,getUserProfile).put(verifyToken,editUserProfile);
router.route("/logout").post(logOut)


export default router;
