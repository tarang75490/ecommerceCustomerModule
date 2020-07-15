const Customer = require("../models/Customers")
const Collection = require("../models/Collection")


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
    console.log(customer)
    if(customer.error){
        return customer
    }
    // console.log(updateProfileRequest.body)
    let toUpdateProperties = Object.keys(updateProfileRequest.body)
    // console.log(toUpdateProperties)
    toUpdateProperties.forEach((property)=>{
        // console.log(updateProfileRequest.body[property])
        customer[property] = updateProfileRequest.body[property]
    })
    console.log(customer)
    customer = await new Customer(customer).save()
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


const loginByPassword = async (fastify,loginRequest) => {
    const customer = await Customer.findOne(loginRequest)
    if(!customer){
        return {
            error : "Crendential Wrong"
        }
    }

    return await customer
}

module.exports = {
    signUpWithPassword,
    getProfile,
    updateProfile,
    loginByPassword
}