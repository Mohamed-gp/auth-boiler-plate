import { Request, Response, NextFunction } from "express";
import { Todo, toDoValidator } from "../models/Todo";

/**
 * @desc create todo
 * @route /api/todos/:id
 * @access public
 * @method POST
 */
const createToDo = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { error } = toDoValidator({ ...req.body, user: id });
  if (error) {
    return res.status(200).json({ message: error.details[0].message });
  }
  const todo = await Todo.create({
    title: req.body.title,
    description: req.body.description,
    user: id,
  });
  return res.status(201).json({ message: "created succefuly", data: todo });
};

/**
 * @desc create todo
 * @route /api/todos/:id
 * @access public
 * @method DELETE
 */
const deleteToDo = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  await Todo.deleteOne({ _id: id });
  return res.status(201).json({ message: "deleted succefuly succefuly" });
};

export { createToDo, deleteToDo };
