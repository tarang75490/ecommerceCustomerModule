const Customer = require("../models/Customers")
const Collection = require("../models/Collection")


const signUpWithPassword = async (fastify,signUpRequest)=>{
    console.log(signUpRequest)
    let customer =  await Customer.findOne(signUpRequest)
    if(customer){
        return{
            error :"Email Id Already Used"
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
    console.log(customer)
    console.log(updateProfileRequest.body)
    let toUpdateProperties = Object.keys(updateProfileRequest.body)
    toUpdateProperties.forEach((property)=>{
        console.log(updateProfileRequest.body[property])
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
            error : "Customer Not Found"
        }
    }

    return customer
}



module.exports = {
    signUpWithPassword,
    getProfile,
    updateProfile
}