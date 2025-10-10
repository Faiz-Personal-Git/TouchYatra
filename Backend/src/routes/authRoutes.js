import {Router} from 'express'
import {authController} from '../controllers/index.js'
import { verifyJWT } from '../middlewares/index.js';

const router = Router();

router.post('/register', authController.registerUser);
router.post('/verify-email', authController.verifyEmail);
router.post('/resend-verification', authController.resendEmailVerification);
router.post('/login', authController.loginUser);
router.get('/logout', verifyJWT, authController.logoutUser);
router.post('/googleLogin', authController.googleLogin);
router.get('/getLoggerDetails', verifyJWT, authController.getLoggerDetails);
router.get('/refereshAccessToken', authController.refreshAccessToken);

export const authRoutes = router;
