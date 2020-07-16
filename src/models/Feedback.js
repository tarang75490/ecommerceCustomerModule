const mongoose = require("mongoose")

require('../app.js')

const customerFeedbackSchema = new mongoose.Schema({
   productId:{
        type:String,
        required:true,
    },
    customerId:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        max:5,
        min:1
    },
    feedback:{
        type:String
    }
},{
    strict: true,
    strictQuery: true
})



const Feedback = mongoose.model("Feedback",customerFeedbackSchema)


module.exports = Feedback
