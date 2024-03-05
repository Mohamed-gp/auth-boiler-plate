import mongoose from "mongoose";
import joi, { ref } from "joi";
import { UserSignIn, UserSignUp } from "../types/interfaces";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
    // todos : [{ title: String, description: String }],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.virtual("todos", {
  // new propertie : posts : []
  ref: "Todo", // reference to Post model
  foreignField: "user", // the foreign field in the todos model that point to the user
  localField: "_id", // get all post that have user == _id (in other way the where todos model point )
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

const signInValidator = (obj: UserSignIn) => {
  const Schema = joi.object({
    email: joi.string().trim().min(5).max(50).required(),
    password: joi.string().trim().min(8).required(),
  });
  return Schema.validate(obj);
};

const signUpValidator = (obj: UserSignUp) => {
  const Schema = joi.object({
    username: joi.string().trim().min(5).max(20).required(),
    email: joi.string().trim().min(5).max(50).required(),
    password: joi.string().trim().min(8).required(),
  });
  return Schema.validate(obj);
};

export { User, signUpValidator, signInValidator };
