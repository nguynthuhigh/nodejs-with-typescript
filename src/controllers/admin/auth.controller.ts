import AppError from "../../core/error";
import {Request, Response}  from 'express'
import AdminService from "../../services/admin/admin.service";
import catchAsync from "../../middlewares/catchAsync.middleware";
import sendResponse from "../../utils/response";
class AuthController {
    static addNewAdmin = async (req:Request, res:Response) => {
        const data = await new AdminService(req.body).addNewAdmin();
        return sendResponse(res,'Success!',data,200)
    }
    static adminLogin = async (req:Request, res:Response)=>{
        const data = await new AdminService(req.body).adminLogin()
        return sendResponse(res,'Login success!',data,200)
    }
}

export default AuthController;
