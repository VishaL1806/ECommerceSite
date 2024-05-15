import asyncHandler from "express-async-handler";
import Product from "../models/ProductModel.js";
import CartWishlist from "../models/UserCartWishlistMappingModel.js";
import mongoose from "mongoose";

const getAllProducts = asyncHandler(async (req, res) => {
  const {userId} = req.user
  const products = await Product.aggregate([
    {
      $lookup: {
        from: 'cartwishlists', // Name of the CartWishlist collection
        let: { productId: '$_id' }, // Using _id of Product
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$productId', '$$productId'] },{ $eq: ["$userId",new mongoose.Types.ObjectId(userId)] }] }
            }
          }
        ],
        as: 'cartWishlist'
      }
    },
    {
      $addFields: {
        isCart:  { $cond: [{$eq: [{ $first: '$cartWishlist.isCart' }, true]}, true, false ] } ,
        isWishlisted: { $cond: [{$eq: [{ $first: '$cartWishlist.isWishlisted' }, true]}, true, false ] },
        quantity:  { $cond: [{$eq: [{ $first: '$cartWishlist.isCart' }, true]}, { $first: '$cartWishlist.quantity' }, 0 ] } 
      }
    },
    {
      $project: {
        cartWishlist: 0 // Exclude the cartWishlist field from the final result
      }
    }
  ])
  if (products) {
    res.status(201).json({ status: true, data: products });
  } else {
    return res.status(500).json({ status: false, data: null });
  }
});

const getWishlist = asyncHandler(async (req, res) => {
  const {userId} = req.user;
  try {
    const wishlist = await CartWishlist.find({ userId , isWishlisted : true })
      .populate({
        path: "productId",
        select: ["title", "rating", "price", "thumbnail", "discountPercentage"],
      })
      .select("productId -_id")
      let data = wishlist.map(x=>x.productId)
    return res.status(200).json({ status: true, data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: true, message: "Something went wrong" });
  }
});

const getCart = asyncHandler(async (req, res) => {
  const {userId} = req.user;
  try {
    const cart = await CartWishlist.aggregate([
      {
        $match: {
          $expr: { $and: [{ $eq: ['$isCart', true] },{$eq: ['$userId',new mongoose.Types.ObjectId(userId) ]}] } 
        }
      },
      {
        $lookup: {
          from: 'products',
          let : {pId: "$productId"} ,// Name of the CartWishlist collection // Using _id of Product
          pipeline: [
            {
              $match: {
                $expr: { $and: [{ $eq: ['$_id', "$$pId"] }] }
              }
            }
          ],
          as: 'products'
        }
      },
      {
        $addFields: {
          total: { $multiply: [ {$first : '$products.price'}, "$quantity" ] },
          // isWishlisted: { $cond: [{$eq: [{ $first: '$cartWishlist.isWishlisted' }, true]}, true, false ] },
          // quantity:  { $cond: [{$eq: [{ $first: '$cartWishlist.isCart' }, true]}, { $first: '$cartWishlist.quantity' }, 0 ] } 
        }
      },
      {
        $project: {
          product: {$first : "$products"},
          total : 1,
          quantity :1 // Exclude the cartWishlist field from the final result
        }
      }
    ])
     
    return res.status(200).json({ status: true, data : cart });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: true, message: "Something went wrong" });
  }
});

const getProductDetails = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { productId } = req.params;
  try {
    const product = await Product.aggregate([
      {
        $match: {
          $expr: { $eq: ['$_id',new mongoose.Types.ObjectId(productId) ] } 
        }
      },
      {
        $lookup: {
          from: 'cartwishlists', // Name of the CartWishlist collection
          let: { productId: '$_id' }, // Using _id of Product
          pipeline: [
            {
              $match: {
                $expr: { $and: [{ $eq: ['$productId', '$$productId'] },{ $eq: ["$userId",new mongoose.Types.ObjectId(userId)] }] }
              }
            }
          ],
          as: 'cartWishlist'
        }
      },
      {
        $addFields: {
          isCart:  { $cond: [{$eq: [{ $first: '$cartWishlist.isCart' }, true]}, true, false ] } ,
          isWishlisted: { $cond: [{$eq: [{ $first: '$cartWishlist.isWishlisted' }, true]}, true, false ] },
          quantity:  { $cond: [{$eq: [{ $first: '$cartWishlist.isCart' }, true]}, { $first: '$cartWishlist.quantity' }, 0 ] } 
        }
      },
      {
        $project: {
          cartWishlist: 0 // Exclude the cartWishlist field from the final result
        }
      }
    ])


    return res
      .status(201)
      .json({ status: true, data: product });
  } catch (error) {
    console.log(error);
    return res
      .status(201)
      .json({ status: true, message: "Something went wrong" });
  }
});

const getDiscountedProducts = asyncHandler(async (req, res) => {
  const {userId} = req.body
  const products = await Product.aggregate([
    {
      $lookup: {
        from: 'cartwishlists', // Name of the CartWishlist collection
        let: { productId: '$_id' }, // Using _id of Product
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$productId', '$$productId'] },{ $eq: ["$userId",new mongoose.Types.ObjectId(userId)] }] }
            }
          }
        ],
        as: 'cartWishlist'
      }
    },
    {
      $addFields: {
        isCart:  { $cond: [{$eq: [{ $first: '$cartWishlist.isCart' }, true]}, true, false ] } ,
        isWishlisted: { $cond: [{$eq: [{ $first: '$cartWishlist.isWishlisted' }, true]}, true, false ] }
      }
    },
    {
      $project: {
        cartWishlist: 0 // Exclude the cartWishlist field from the final result
      }
    }
  ]).sort({ discountPercentage: -1 })
    .limit(10);

  return res.status(200).json({ products });
});

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Product.find({}).distinct("category");

  return res.status(200).json({ categories });
});

export {
  getAllProducts,
  getWishlist,
  getCart,
  getProductDetails,
  getDiscountedProducts,
  getAllCategories,
};
