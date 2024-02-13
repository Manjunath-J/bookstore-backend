import express from "express";
import * as BookController from "../controllers/book.controller";
import { userAuth } from "../middlewares/auth.middleware";

const router = express.Router();

router.get('', userAuth, BookController.getAllBooks);
router.get('/search', userAuth, BookController.getBook);
router.get('/filter', userAuth, BookController.filterPrice);
router.get('/:_id', userAuth, BookController.getBookById);


export default router;