import express from "express";
import {
    getAllCategories,
    getAllProducts,
    getCart,
    getDiscountedProducts,
    getProductDetails,
    getWishlist,

} from "../controllers/productController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();


router.get("/getAllProducts",protectRoute ,getAllProducts);
router.get("/getProductDetail/:productId",protectRoute ,getProductDetails);
router.get("/wishlist",protectRoute ,getWishlist);
router.get("/cart",protectRoute,getCart);
router.get("/discountedProducts",protectRoute,getDiscountedProducts);
router.get("/allCategories",protectRoute,getAllCategories);




export default router;