import express from "express";
import {
    loginUser,
    registerUser,
    toggleWishlist,
    toggleCart,
    ValidateUser
} from "../controllers/userController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/log-in" ,loginUser);
router.post("/register",registerUser);
router.post("/wishlist/:productId",protectRoute,toggleWishlist);
router.post("/cart/:productId",protectRoute,toggleCart);
router.get("/validate",protectRoute,ValidateUser)



export default router;