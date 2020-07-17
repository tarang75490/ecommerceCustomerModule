const HttpError = require('../models/errors/httpError')
const validator = require('validator')
exports.validateSignUpRequest = function (req, res, done) {
    if (!req.body.email) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Email is missing'))
    }else if (!validator.isEmail(req.body.email)){
        res.code(400)
        done(new HttpError('faliure', 20001, 'Invalid Email'))
    }else if (!req.body.userName) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'UserName is missing'))
    }else if(!req.body.password){
        res.code(400)
        done(new HttpError('faliure', 20001, 'Password is missing'))
    }else if (((req.body.password.toLowerCase()).includes('password')) || req.body.password.length<6){
        res.code(400)
        done(new HttpError('faliure', 20001, "Password can't be included in Password field or length is too short"))
    }else if(!req.body.mobileNo){
        res.code(400)
        done(new HttpError('faliure', 20001, 'Mobile No is missing'))
    }
    else{
        done()
    }
}
exports.validateUpdateProfileRequest = function (req, res, done) {
    if (!req.query.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'customerId or Email is missing'))
    }else if (Object.keys(req.body).length ===0) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Username,mobile,passsword,email update Allowed'))
    }else{
        done()
    }
}


exports.validateGetProfileRequest = function (req, res, done) {
    if (!req.query.customerId ) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'customerId  is missing'))
    }else{
        done()
    }
}


exports.validatecheckCredentials = function (req, res, done) {
    if (!req.body.password ) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Password Required'))
    }else if (!(req.body.email || req.body.mobileNo)) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Email or Phone No  is  required'))
    }
    else{
        done()
    }
}


exports.validateCustomerFeedback = function (req, res, done) {
    if (req.body.rating === null) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'rating is required'))
    }else if (!(req.body.productId)) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'ProductId  is  required'))
    }else if (!(req.body.customerId)) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'CustomerId  is  required'))
    }
    else{
        done()
    }
}



exports.validateUpdateToken = function (req, res, done) {
    if (!req.body.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'CustomerId is required'))
    }else if (!(req.body.token)) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Token  is  required'))
    }
    else{
        done()
    }
}