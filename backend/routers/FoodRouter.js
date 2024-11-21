import express from "express";
import MenuItem from "../modals/menuItemModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

// get all food list
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const foodItems = await MenuItem.find({});
    res.json(foodItems);
  })
);

// get single food details
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const food = await MenuItem.findById(req.params.id);
    if (food) {
      res.json(food);
    } else {
      res.status(404).json({ message: "Opps! product not found" });
    }
  })
);

export default router;
