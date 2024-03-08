import express from "express";
import * as cartController from '../controllers/cart.controller';
import { userAuth } from "../middlewares/auth.middleware";

const router = express.Router();

router.post('/:_id', userAuth, cartController.addToCart);

router.get('', userAuth, cartController.getCart);

router.delete('', userAuth, cartController.deleteCart);

router.delete('/:_id', userAuth, cartController.removeCart);

router.put('/:_id', userAuth, cartController.isPurchase);


export default router;