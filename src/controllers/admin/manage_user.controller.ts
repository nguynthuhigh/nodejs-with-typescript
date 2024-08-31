import {Request, Response}  from 'express'
import catchAsync from "../../middlewares/catchAsync.middleware";
import sendResponse from "../../utils/response";
import ManageUserService from '../../services/admin/manage_user.service';
class AuthController {
    static addNewUser = catchAsync(async (req:Request, res:Response) => {
        console.log(req.body)
        const data = await ManageUserService.addNewUser(req.body);
        console.log(data)
        return sendResponse(res,'Success!',data,200)
    })
}

export default AuthController;
