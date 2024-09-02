import {Request, Response}  from 'express'
import catchAsync from "../../middlewares/catchAsync.middleware";
import sendResponse from "../../utils/response";
import ManageUserService from '../../services/admin/manage_user.service';
class AuthController {
    static addNewUser = catchAsync(async (req:Request, res:Response) => {
        const data = await ManageUserService.addNewUser(req.body);
        return sendResponse(res,'Success!',data,200)
    })
    static getAllUsers = catchAsync(async (req:Request, res:Response) => {
        const data = await ManageUserService.getAllUsers(1,2);
        return sendResponse(res,'Success!',data,200)
    })
    static editProfileUser = catchAsync(async (req:Request, res:Response) => {
        const data = await ManageUserService.editProfileUser(req.body);
        return sendResponse(res,'Success!',data,200)
    })
    static banUser = catchAsync(async (req:Request, res:Response) => {
        const data = await ManageUserService.banUser(req.body);
        return sendResponse(res,'Success!',data,200)
    })
}

export default AuthController;
