import express, { Router } from "express";
import { CreateProductController } from "../controllers/ProductController.js";
import { isAdmin, registerSignIn } from "../middleware/authMiddleWare.js";
import formidable from "express-formidable";
const router = express.Router();

// create product

router.post(
  "/create-product",
  registerSignIn,
  isAdmin,
  formidable(),
  CreateProductController
);

export default router;
