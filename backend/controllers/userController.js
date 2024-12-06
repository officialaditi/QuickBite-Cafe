import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generatetoken.js";

/**
 * @Desc     login function
 * @Route    POST ==> /api/users/login
 * @Access   PUBLIC
 */

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

/**
 *  @Desc       Register function
 *  @Route      POST ==> /api/users/
 *  @access     PUBLIC
 */

const register = asyncHandler(async (req, res) => {
  const { fullname, email, password, phoneNumber } = req.body;

  if (!fullname || !email || !password || !phoneNumber) {
    return res.status(400).json({ message: "All Field are required**" });
  }

  // checking if user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: "User already exist.." });
  }

  // create new user
  const user = await User.create({
    fullname,
    email,
    password,
    phoneNumber,
  });

  if (user) {
    return res.status(201).json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      token: generateToken(user._id),
    });
  } else {
    return res.status(500).json({ message: "something went wrong " });
  }
});

/**
 *  @Desc    get user profile
 *  @Route   GET ==> /api/users/profile
 *  @access  private
 */

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      isAdmin: user.isAdmin,
      phoneNumber: user.phoneNumber
    });
  } else {
    res.status(404);
    throw new Error("User is not found");
  }
});
export { login, register, getUserProfile };
