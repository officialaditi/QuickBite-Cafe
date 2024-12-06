import express from "express";
import {bookTable} from "../controllers/reservationController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, bookTable);


export default router;