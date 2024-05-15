import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password : {type:String ,required : true},
    addresses :[
       {
        addressline1: {
          type: String,
          default: "assigned",
        },
        city: {
            type : String,
            required : true
        },
        state: {
            type : String,
            required : true
        },
        pinconde: {
            type : Number,
            required : true
        },
        isDefault :{
            type : Boolean,
            default : false,

        }
      },
    ]
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

const User =  mongoose.model('Users',userSchema) 

export default User;
