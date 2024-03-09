import { Router } from "express";
import { createToDo, deleteToDo } from "../controllers/toDosControllers";
import { verifyTokenAndUser } from "../middlewares/authmiddleware";

const router = Router();

router.route("/:id").post(verifyTokenAndUser, createToDo).delete(deleteToDo);

export default router;
