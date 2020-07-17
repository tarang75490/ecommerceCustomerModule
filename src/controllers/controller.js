const service = require('../services/services')

const HttpError = require('../models/errors/httpError')


exports.signUp= async (req, res) => {
    try {
        let response = await service.signUpWithPassword(req.fastify, req.body)
        
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "SignUp User Failed", e.message)
    }
}






exports.updateProfile= async (req, res) => {
    try {
        let response = await service.updateProfile(req.fastify, req)
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Update Profile Failed", e.message)
    }
}


exports.updateToken = async (req, res) => {
    try {
        let response = await service.updateToken(req.fastify, req.body)
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Update Token Failed", e.message)
    }
}



exports.getProfile= async (req, res) => {
    try {
        let response = await service.getProfile(req.fastify, req.query)
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Get Profile Failed", e.message)
    }
}


exports.checkCredentials= async (req, res) => {
    try {
        let response = await service.checkCredentials(req.fastify, req.body)
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Login Failed", e.message)
    }
}



exports.customerFeedback = async (req,res)=>{
    try{

        let response = await service.customerFeedback(req.fastify, req.body)
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })

    }
    catch(e){
        res.code(500)
        throw new HttpError('faliure', 2001, "Unable to save customer Feedback", e.message)
    }
}