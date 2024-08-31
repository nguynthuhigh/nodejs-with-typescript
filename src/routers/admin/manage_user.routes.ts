import { Router } from "express";
import controller from '../../controllers/admin/manage_user.controller'
const router = Router()
import catchAsync from "../../middlewares/catchAsync.middleware";

router.post('/add-new-user',catchAsync(controller.addNewUser))

export default router