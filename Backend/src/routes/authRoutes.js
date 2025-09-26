import {Router} from 'express'
import {authController} from '../controllers/index.js'

const router = Router();

router.post('/register', authController.registerUser);
router.post('/verify-email', authController.verifyEmail);
router.post('/resend-verification', authController.resendEmailVerification);
router.post('/login', authController.loginUser);
router.post('/googleLogin', authController.googleLogin);

export const authRoutes = router;
