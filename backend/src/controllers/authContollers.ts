import { NextFunction, Request, Response } from "express";
import {
  User,
  signInValidator,
  signUpValidator,
  updateUserValidator,
} from "../models/User";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken";

/**
 * @desc signin old User
 * @route /auth/signin
 * @access public
 * @method POST
 */
const signInContoller = async (req: Request, res: Response) => {
  const { error } = signInValidator(req.body);
  const { email, password } = req.body;

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  try {
    const user = await User.findOne({ email: email }).populate("todos");

    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(400).json({ message: "Invalid email or password." });
    }
    generateToken(res, user._id);
    return res.status(200).json({
      message: "Sign In successful",
      data : {
        id: user._id,
        email: user.email,
        username: user.username,
        todos : user.todos
      }
    });
  } catch (error) {
    console.error("Error in signInContoller:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// we can wrap it in async handler express function and we will not use try catch
/**
 * @desc create a new user
 * @route /auth/signup
 * @access public
 * @method POST
 */
const signUpContoller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = signUpValidator(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  let user = await User.findOne({
    email: req.body.email,
  });
  if (user) {
    return res.status(400).json({
      message: "somthing went wrong",
    });
  }
  user = await User.create({
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
    username: req.body.username,
  });
  generateToken(res, user._id);
  return res.status(201).json({
    message: "created succefuly",
    data : {
      id: user._id,
      email: user.email,
      username: user.username,
      todos : user.todos
    }
  });
};

/**
 * @desc logout user
 * @route /auth/profile
 * @access private with cookie token verifcation
 * @method POST
 */
const editUserProfile = async (req: Request, res: Response) => {
  const { error } = updateUserValidator(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  const user = await User.findById(req.user._id);
  if (user) {
    user.email = req.body.email || user.email;
    user.username = req.body.username || user.username;
    if (req.body.password) {
      user.password = await bcrypt.hash(req.body.password,10);
    }
    const updatedUser = await user.save();

    return res.status(200).json({
      message: "succefuly user updated information",
      data : {
        id: user._id,
        email: user.email,
        username: user.username,

      }
    });
  } else {
    return res.status(404).json({ message: "user not Found" });
  }
};

/**
 * @desc logout user
 * @route /auth/profile
 * @access private with cookie token verifcation
 * @method POST
 */
const getUserProfile = async (req: Request, res: Response) => {
  const user = {
    id: req.user._id
    email: req.user.email,
    username: req.user.username,
    todos : user.todos

  };
  return res.status(200).json({
    data: user,
  });
};

/**
 * @desc logout user
 * @route /auth/logout
 * @access public
 * @method POST
 */
const logOut = async (req: Request, res: Response) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return res.status(200).json({
    message: "user logged out",
  });
};

export {
  signInContoller,
  signUpContoller,
  logOut,
  getUserProfile,
  editUserProfile,
};
