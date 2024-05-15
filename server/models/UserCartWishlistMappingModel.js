import mongoose, { Schema } from "mongoose";

const cartWislistSchema = new Schema({
    userId : {type : Schema.ObjectId,ref:'Users', required: true},
    productId : {type:Schema.ObjectId, ref : 'Products', required: true},
    quantity : {type:Number,default :0},
    isCart : {type:Boolean, required: true},
    isWishlisted : {type:Boolean, required: true}
})

const CartWishlist =  mongoose.model('CartWishlists',cartWislistSchema) 

export default CartWishlist