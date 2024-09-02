import { Router } from "express";
import controller from '../../controllers/admin/manage_user.controller'
const router = Router()
import catchAsync from "../../middlewares/catchAsync.middleware";

router.post('/add-new-user',catchAsync(controller.addNewUser))
router.get('/get-all-users',catchAsync(controller.getAllUsers))
router.patch('/edit-profile',catchAsync(controller.editProfileUser))
router.patch('/ban',catchAsync(controller.banUser))


export default router