import { Request, Response, NextFunction } from "express";
import { Todo, toDoValidator } from "../../models/Todo";

const getAllToDosByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  return res.status(200).json({
    message: id,
  });
};

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

export { getAllToDosByID, createToDo };
