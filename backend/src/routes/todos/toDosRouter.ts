import { Router } from "express";
import { createToDo, deleteToDo, getAllToDosByID } from "../../controllers/toDosControllers/toDosControllers";

const toDosRouter = Router();

toDosRouter.route("/:id").get(getAllToDosByID);
toDosRouter.route("/:id").post(createToDo);
toDosRouter.route("/:id").delete(deleteToDo);

export { toDosRouter };
