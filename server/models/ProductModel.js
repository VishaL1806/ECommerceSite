import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    price :{
        type : Number,
        required : true
    },
    discountPercentage :{
        type : Number,
        required : true,
        default : 0
    },
    rating :{
        type : Number,
        required : true
    },
    stock :{
        type : Number,
        required : true
    },
    brand :{
        type : String,
        required : true
    },
    category :{
        type : String,
        required : true
    },
    thumbnail :{
        type : String,
        required : true
    },
    images :[{
        type : String,
        required : true
    }]
})

const Product =  mongoose.model('Products',ProductSchema) 

export default Product