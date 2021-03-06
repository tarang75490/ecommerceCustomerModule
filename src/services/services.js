const Customer = require("../models/Customers")
const Collection = require("../models/Collection")
const Feedback = require('../models/Feedback')
const History  = require("../models/History")
const jwt = require('jsonwebtoken')
const config = require('../config/index')


const signUpWithPassword = async (fastify,signUpRequest)=>{
    console.log(signUpRequest)
    let customer =  await Customer.findOne({email:signUpRequest.email})
    let customer1 = await Customer.findOne({mobileNo:signUpRequest.mobileNo})
    if(customer || customer1){
        return{
            error :"Email Id  or Phone Already Used"
        }
    }
    
    let collection = await Collection.findOne({})
    if (!collection){
        collection = await new Collection(collection).save()
    }
    collection.noOfCustomers += 1
    

    customer = {
        customerId:"Customer_"+collection.noOfCustomers,
        ...signUpRequest,
        otpVerified:false,
    }
    await new Collection(collection).save()
    await new Customer(customer).save()
    return customer
}




const updateProfile = async (fastify,updateProfileRequest)=>{
    let customer = await getProfile(fastify,updateProfileRequest.query)
    // console.log(updateProfileRequest)
    if(customer.error){
        return customer
    }
    // console.log(updateProfileRequest.body)
    let toUpdateProperties = Object.keys(updateProfileRequest.body)
    // console.log(toUpdateProperties)
    toUpdateProperties.forEach(async (property)=>{   
            customer[property] = updateProfileRequest.body[property]
    })
    
    customer =   await new Customer(customer).save()    
    
    customer = customer._doc


    delete customer.tokens
    delete customer._id
    delete customer.__v
    console.log(customer)
    return customer
    
}
const updateToken = async (fastify,updateTokenRequest) => {
    let customer = await Customer.findOne({customerId : updateTokenRequest.customerId})
    customer.tokens = customer.tokens.concat({token : updateTokenRequest.token})
    if (!customer.otpVerified){
        customer.otpVerified = true
    }
    customer =  await new Customer(customer).save()
    customer = customer._doc
    delete customer.password
    delete customer.tokens
    return customer
}


const getProfile = async (fastify,getProfileRequest)=>{
    const customer = await Customer.findOne(getProfileRequest)
    if(!customer){
        return{
            error : "Customer Not Found Please Check"
        }
    }

    return await customer
}


const checkCredentials = async (fastify,loginRequest) => {
    let LoginRequest;
    if(loginRequest.mobileNo){
        LoginRequest={
            mobileNo:loginRequest.mobileNo
        }
    }else{
        LoginRequest={
            email:loginRequest.email
        }
    }
    let customer = await Customer.findOne(LoginRequest)
    if(!customer){
        return {
            error : "Account Not Registered"
        }
    }else if(customer.password !== loginRequest.password){
        return {
            error : "Wrong Credentials"
        }
    }
    // console.log(customer)
    return customer
}





const customerFeedback = async(fastify,feedbackRequest) => {

    const customer = await getProfile(fastify,{customerId:feedbackRequest.customerId})
    console.log(customer)
    if(customer.error){
        return customer
    }


    const feedback = await new Feedback(feedbackRequest).save()
    return feedback


}

const saveCustomerHistory = async(fastify,saveCustomerHistoryRequest) =>{
    const histories = await new History(saveCustomerHistoryRequest).save()
    return histories
}




const getCustomerHistory = async(fastify,getCustomerHistoryRequest) =>{
    const histories = await History.find(getCustomerHistoryRequest)
    return histories
}

module.exports = {
    signUpWithPassword,
    getProfile,
    updateProfile,
    updateToken,
    checkCredentials,
    customerFeedback,
    saveCustomerHistory,
    getCustomerHistory
}