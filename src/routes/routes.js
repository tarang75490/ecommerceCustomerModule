const controllers = require('../controllers/controller')
const validators = require('../validators/validators')

// Import Swagger documentation
const documentation = require('./documentation/documentServicesApis')

const routes = [
    {
        method: "POST",
        url: "/signUp",
        handler: controllers.signUp,
        schema: documentation.signUpWithPassword,
        preValidation: validators.validateSignUpRequest
    },
    {
        method: "POST",
        url: "/updateProfile",
        handler: controllers.updateProfile,
        schema: documentation.updateProfile,
        preValidation: validators.validateUpdateProfileRequest
    },
    {
        method: "GET",
        url: "/getProfile",
        handler: controllers.getProfile,
        schema: documentation.getProfile,
        preValidation: validators.validateGetProfileRequest
    },
    {
        method: "POST",
        url: "/checkCredentials",
        handler: controllers.checkCredentials,
        schema: documentation.checkCredentials,
        preValidation: validators.validatecheckCredentials
    },
    {
        method: "POST",
        url: "/customerFeedback",
        handler: controllers.customerFeedback,
        schema: documentation.customerFeedback,
        preValidation: validators.validateCustomerFeedback
    },
    {
        method: "POST",
        url: "/updateToken",
        handler: controllers.updateToken,
        schema: documentation.updateToken,
        preValidation: validators.validateUpdateToken
    },
    {
        method: "POST",
        url: "/saveCustomerHistory",
        handler: controllers.saveCustomerHistory,
        schema: documentation.saveCustomerHistory,
        preValidation: validators.validateSaveCustomerHistory
    },
    {
        method: "GET",
        url: "/getCustomerHistory",
        handler: controllers.getCustomerHistory,
        schema: documentation.getCustomerHistory,
        preValidation: validators.validateGetCustomerHistory
    },

]



module.exports = routes