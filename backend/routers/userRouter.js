import express from "express";
import {
  getUserProfile,
  login,
  register,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(register);
router.route("/login").post(login);
router.route("/profile").get(protect, getUserProfile);

export default router;
