import AppError from "../../core/error";
import {Request, Response}  from 'express'
import AuthServices from "../../services/admin/auth.services";
import catchAsync from "../../middlewares/catchAsync.middleware";
class AuthController {
    static testAuth =catchAsync(async (req:Request, res:Response) => {
        const data = await AuthServices.signUp();
        console.log(data)
        res.send(data)
    })
}

export default AuthController;
