import { Router } from 'express';
import authRoute from './admin/auth.routes'; 
import manageUserRoute from './admin/manage_user.routes'; 

const router = Router();

router.use('/auth', authRoute);
router.use('/user', manageUserRoute);

export default router;
