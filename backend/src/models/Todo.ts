import mongoose from "mongoose";
import joi from "joi";
import { toDo } from "../types/interfaces";

const toDoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", toDoSchema);

const toDoValidator = (obj : toDo) => {
    const Schema = joi.object({
    title: joi.string().trim().min(5).max(50).required(),
    description: joi.string().trim().min(5).max(50).required(),
    user: joi.string().hex().length(24)
  });
  return Schema.validate(obj);
};

export { Todo ,toDoValidator };
