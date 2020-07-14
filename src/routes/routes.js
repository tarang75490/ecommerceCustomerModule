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
]



module.exports = routes