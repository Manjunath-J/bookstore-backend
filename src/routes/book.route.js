import express from "express";
import * as BookController from "../controllers/book.controller";

const router = express.Router();

router.get('', BookController.getAllBooks);
router.get('/:_id', BookController.getBookById);

export default router;