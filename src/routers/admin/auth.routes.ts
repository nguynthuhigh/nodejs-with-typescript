import { Router } from "express";
import controller from '../../controllers/admin/auth.controller'
const router = Router()
import catchAsync from "../../middlewares/catchAsync.middleware";


router.post('/add-new',catchAsync(controller.addNewAdmin))
router.post('/login',catchAsync(controller.adminLogin))

export default router