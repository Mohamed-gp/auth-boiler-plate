import { Router } from "express";
import { createToDo, deleteToDo} from "../controllers/toDosControllers";

const router = Router()


router.route("/:id").post(createToDo).delete(deleteToDo)


export default router