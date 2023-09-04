import express from "express";
import { isAdmin, registerSignIn } from "../middleware/authMiddleWare.js";
import {
  CategoryController,
  DeleteCategoryController,
  SingleCategoryController,
  createCategoryController,
  updateCategory,
} from "../controllers/categoryController.js";
const router = express.Router();

// create category
router.post(
  "/create-category",
  registerSignIn,
  isAdmin,
  createCategoryController
);
// update Category

router.put("/update-category/:id", registerSignIn, isAdmin, updateCategory);

// get all categories

router.get("/categories", CategoryController);

// get single category

router.get("/single-category/:slug", SingleCategoryController);
router.delete("/delete-category/:id", DeleteCategoryController);
export default router;
