import {NextFunction, Request, Response, response} from "express"
import { User, signInValidator, signUpValidator } from "../../models/User"
import bcrypt from "bcrypt"


/**
 * @desc signin old User
 * @route /auth/signin
 * @access public
 * @method POST
 */
const signInContoller = async (req:Request,res : Response,next :NextFunction) => {
    // const { error } = signInValidator(req.body) 
    // const { email ,password} = req.body
    // if (error) {
    //     return response.status(400).json({
    //         message : error.details[0].message,
    //     })
    // }
    // const user = await User.findOne({email : email})
    // if (!user) {
    //     return res.status(400).json({message : "somthing went wrong"})
    // }
    // const isValid =  await bcrypt.compare(password,user.password)
    return res.status(200).json({message : "hello"})
}




/**
 * @desc signin old User
 * @route /auth/signup
 * @access public
 * @method POST
 */
const signUpContoller = async (req:Request,res : Response,next :NextFunction) => {
    return res.status(200).json({message : "hello"})
}



export {signInContoller,signUpContoller}