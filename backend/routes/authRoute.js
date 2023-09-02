import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgetPassword,
} from "../controllers/authControler.js";
import { isAdmin, registerSignIn } from "../middleware/authMiddleWare.js";
const router = express.Router();
// register
router.post("/register", registerController);
// log in
router.post("/login", loginController);

// forget password
router.post("/forget-password", forgetPassword);
// Authrization

router.get("/test", registerSignIn, isAdmin, testController);

// userAutherization
router.get("/user-auth", registerSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// adminAutherization
router.get("/admin-auth", registerSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
