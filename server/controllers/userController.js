import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import createJWT from "../utils/jwt.js";
import CartWishlist from "../models/UserCartWishlistMappingModel.js";
import mongoose from "mongoose";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ status: false, message: "All fields are required" });
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ status: false, message: "Email address already exists" });
    }

    const createUser = await User.create({
      name,
      email,
      password,
    });
    if (createUser) {
      return res
        .status(200)
        .json({ status: true, message: "user registered succesfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, data: error });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ status: false, message: "All fields are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ status: false, message: "Email or Password is Incorrect" });
    }
    const isPassMatch = await user.matchPassword(password);
    if (!isPassMatch) {
      return res
        .status(401)
        .json({ status: false, message: "Email or Password is Incorrect" });
    }
    createJWT(res, user._id);
    let userDetail = {
      userId: user._id,
      wishlist: user.wishlist,
      cart: user.cart,
      name: user.name,
    };
    res.status(200).json({
      status: true,
      data: userDetail,
      message: "Logged in Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, data: error });
  }
});

const toggleWishlist = asyncHandler(async (req, res) => {
  const {userId} = req.user
  const { productId } = req.params;
  const cartmappingDetails = await CartWishlist.findOne({ productId });
  if (cartmappingDetails) {
    if (cartmappingDetails.isCart) {
      await cartmappingDetails.updateOne({
        isWishlisted: !cartmappingDetails.isWishlisted,
      });
    } else {
      await CartWishlist.deleteOne({ productId });
    }
  } else {
    await CartWishlist.create({
      isCart: false,
      isWishlisted: true,
      userId,
      productId,
    });
  }

  return res.status(200).json({ status: true, message: "Success" });
});

const toggleCart = asyncHandler(async (req, res) => {
  const {userId} = req.user
  const { productId } = req.params;
  const { quantity } = req.body;
  if (quantity < 0) {
    return res
      .status(400)
      .json({ status: false, message: "quantity should be valid number" });
  }
  const cartmappingDetails = await CartWishlist.findOne({ productId });
  if (quantity == 0) {
    if (cartmappingDetails.isWishlisted) {
      await cartmappingDetails.updateOne({ isCart: false, quantity });
    } else {
      await cartmappingDetails.deleteOne();
    }
  } else if (cartmappingDetails) {
    if (cartmappingDetails.isCart) {
      await cartmappingDetails.updateOne({
        quantity: quantity,
      });
    } else {
      await cartmappingDetails.updateOne({ isCart: true, quantity });
    }
  } else {
    await CartWishlist.create({
      isCart: true,
      isWishlisted: false,
      userId,
      productId,
      quantity,
    });
  }

  return res.status(200).json({ status: true, message: "Success" });
});

const ValidateUser = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const user = await CartWishlist.aggregate([
    {
      $match : {userId : new mongoose.Types.ObjectId(userId)}
    },
    {
      $group: {
        _id: "$userId",
        wishlist: { $sum: { $cond: [{ $eq: ["$isWishlisted", true] }, 1, 0] } },
        cart: { $sum: { $cond: [{ $eq: ["$isCart", true] }, 1, 0] } },
      },
    }
  ]);
  return res.status(200).json({
    status: true,
    message: "Valid",
    data: user[0],
  });
});

export { registerUser, loginUser, toggleWishlist, toggleCart, ValidateUser };
