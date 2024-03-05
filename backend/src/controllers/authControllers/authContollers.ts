import { NextFunction, Request, Response, response } from "express";
import { User, signInValidator, signUpValidator } from "../../models/User";
import bcrypt from "bcrypt";
import { Todo } from "../../models/Todo";

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

    return res.status(200).json({
      message: "Signin successful",
      data: user,
    });
  } catch (error) {
    console.error("Error in signInContoller:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

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
  return res.status(201).json({
    message: "created succefuly",
    data: {
      _id: user._id,
      email: user.email,
      username: user.username,
    },
  });
};

export { signInContoller, signUpContoller };
