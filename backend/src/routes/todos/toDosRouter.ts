import { Router } from "express";
import { createToDo, getAllToDosByID } from "../../controllers/toDosControllers/toDosControllers";

const toDosRouter = Router();

toDosRouter.route("/:id").get(getAllToDosByID);
toDosRouter.route("/:id").post(createToDo);

export { toDosRouter };
