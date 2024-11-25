import express from "express";
import {getAllMenu, getMenuDetail} from '../controllers/foodController.js';

const router = express.Router();

router.route("/").get(getAllMenu);
router.route("/:id").get(getMenuDetail);

export default router;
