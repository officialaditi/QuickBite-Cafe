import asyncHandler from "express-async-handler";
import MenuItem from "../models/menuItemModel.js";

/**
 * @Desc    get all foodItems (food menu);
 * @Route   GET ==> /api/foods
 * @Access  PUBLIC
 */
const getAllMenu = asyncHandler(async (req, res) => {
  const foodItems = await MenuItem.find({});
  res.json(foodItems);
});

/**
 *  @Desc    get single menu detail
 *  @Route   GET ==> /api/foods/:id
 *  @Access  PUBLIC
 */

const getMenuDetail = asyncHandler(async (req, res) => {
  const food = await MenuItem.findById(req.params.id);
  if (food) {
    res.json(food);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

export { getAllMenu, getMenuDetail };
