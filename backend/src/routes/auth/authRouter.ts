import { Router } from "express";
import { signInContoller, signUpContoller } from "../../controllers/authControllers/authContollers";

const authRouter = Router();


authRouter.route("/signin").post(signInContoller)

authRouter.route("/signup").post(signUpContoller)

export { authRouter };
