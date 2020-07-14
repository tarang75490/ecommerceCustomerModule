const mongoose = require("mongoose")
const validator =  require('validator')
require('../app.js')

const customerSchema = new mongoose.Schema({
    customerId:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        max:10,
        min:10,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,    
        trim:true,
        required:true,
    },
    googleId:{
        type:String,
    },
    facebookId:{
        type:String,
    },
    markForDelete:{
        type:Boolean,
        default:false
    },
    otpVerified:{
        type:Boolean,
        default:false
    },
    otp:{
        type:String,
        required:false,
    },
    tokens:[{
        token:{
            type:String
        }
    }]
})
module.exports = mongoose.model("Customer",customerSchema)

