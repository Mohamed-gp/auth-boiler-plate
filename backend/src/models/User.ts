import mongoose from "mongoose";
import joi from "joi"
import { UserSignIn, UserSignUp } from "../types/interfaces";

const userSchema = new mongoose.Schema({
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
    maxlength: 20,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  todos : {
    type : Array,
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

const signInValidator = (obj:UserSignIn) => {
    const Schema = joi.object({
        email : joi.string().trim().min(5).max(20),
        password : joi.string().trim().min(5).max(20),
    })
    return Schema.validate(obj)
}


const signUpValidator = (obj:UserSignUp) => {
    const Schema = joi.object({
        username : joi.string().trim().min(5).max(20),
        email : joi.string().trim().min(5).max(20),
        password : joi.string().trim().min(5).max(20),
    })
    return Schema.validate(obj)
}


export {User,signUpValidator,signInValidator}
