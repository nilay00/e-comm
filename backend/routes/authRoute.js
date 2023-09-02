import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authControler.js";
import { isAdmin, registerSignIn } from "../middleware/authMiddleWare.js";
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/test", registerSignIn, isAdmin, testController);

export default router;
