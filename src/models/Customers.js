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
        type:Number,
        max:9999999999,
        min:1000000000,
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
        default:""

    },
    tokens:[{
        token:{
            type:String
        }
    }]
})


customerSchema.index({ email: 1, mobileNo: 1}, { unique: true });


module.exports = mongoose.model("Customer",customerSchema)

