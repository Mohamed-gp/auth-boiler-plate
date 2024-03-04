"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpContoller = exports.signInContoller = void 0;
/**
 * @desc signin old User
 * @route /auth/signin
 * @access public
 * @method POST
 */
const signInContoller = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
    return res.status(200).json({ message: "hello" });
});
exports.signInContoller = signInContoller;
/**
 * @desc signin old User
 * @route /auth/signup
 * @access public
 * @method POST
 */
const signUpContoller = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({ message: "hello" });
});
exports.signUpContoller = signUpContoller;
