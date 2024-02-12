import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator, siginValidator } from '../validators/user.validator';

const router = express.Router();

//route to create a new User
router.post('', newUserValidator, userController.createUser);

//route to sign-in of User

router.post('/signin', siginValidator, userController.logIn);

export default router;
