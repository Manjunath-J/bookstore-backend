import express from "express";
import * as BookController from "../controllers/book.controller";

const router = express.Router();

router.get('', BookController.getAllBooks);
router.get('/filter', BookController.getBook);
router.get('/book/:_id', BookController.getBookById);


export default router;