exports.updateProfile = {
    description: 'Update the User Profile',
    tags: ["Customer"],
    summary: 'Update',
    query:{
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
    
        },
        "required": [
            "customerId"
        ]
    },
    body: {
        "type": "object",
        "properties": {
            "userName": {
                "type": "string"
            },
            "mobileNo": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "password": {
                "type": "string"
            },
            "otpVerified": {
                "type": "boolean"
            }
        },
        "required": [
        ]
    },
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failiure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "customerId":{
                            "type": "string"
                        },
                        "userName": {
                            "type": "string"
                        },
                        "mobileNo": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "password": {
                            "type": "string"
                        },
                        "otpVerified": {
                            "type": "boolean",
                            "default":false
                        },
                        "markForDelete":{
                            "type":"boolean",
                            "default":false
                        },
                        "otp":{
                            "type":"string"
                        },
                        "googleId":{
                            "type":"string"
                        },
                        "faceBookId":{
                            "type":"string"
                        },
                    },
                    "required": [
                        "email",
                        "mobileNo",
                        "customerId",
                        "userName",
                        "password",
                        "otpVerified",
                        "markForDelete"
                    ]

                }
            },
            "required": [
                "status",
                "data"
            ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

exports.getProfile = {
    description: 'Get Customer Profile by customer Id',
    tags: ['Customer'],
    summary: 'Get Cusomer Profile',
    query:{
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
    
        },
        "required": [
            "customerId"
        ]
    },
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                        "type": "object",
                        "properties": {
                            "customerId":{
                                "type": "string"
                            },
                            "userName": {
                                "type": "string"
                            },
                            "mobileNo": {
                                "type": "string"
                            },
                            "email": {
                                "type": "string"
                            },
                            "password": {
                                "type": "string"
                            },
                            "otpVerified": {
                                "type": "boolean",
                                "default":false
                            },
                            "markForDelete":{
                                "type":"boolean",
                                "default":false
                            },
                            "otp":{
                                "type":"string"
                            },
                            "googleId":{
                                "type":"string"
                            },
                            "faceBookId":{
                                "type":"string"
                            },
                        },
                        "required": [
                            "email",
                            "mobileNo",
                            "customerId",
                            "userName",
                            "password",
                            "otpVerified",
                            "markForDelete"
                        ]
                }
            },
            "required": [
                "status",
                "data"
            ]
        },
        400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

exports.signUpWithPassword = {
    description: 'Create With Password',
    tags: ['Customer'],
    summary: 'Create Customer',
    body: {
        "type": "object",
        "properties": {
            "userName": {
                "type": "string"
            },
            "mobileNo": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "password": {
                "type": "string"
            },
        },
        "required": [
            "userName",
            "mobileNo",
            "email",
            "password"
        ]
    },
    response: {
        201: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failiure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "customerId":{
                            "type": "string"
                        },
                        "userName": {
                            "type": "string"
                        },
                        "mobileNo": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "password": {
                            "type": "string"
                        },
                        "otpVerified": {
                            "type": "boolean",
                            "default":false
                        },
                        "markForDelete":{   
                            "type":"boolean",
                            "default":false
                        },
                        "otp":{
                            "type":"string",
                            "default":""
                        
                        },
                        "googleId":{
                            "type":"string"
                        },
                        "faceBookId":{
                            "type":"string"
                        },
                    },
                    "required": [
                        "email",
                        "mobileNo",
                        "customerId",
                        "userName",
                        "password",
                        "otpVerified",
                    ]
            }
            },
            "required": [
                "status",
                "data"
            ]
        },
        400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

exports.loginByPassword = {
    description: 'Login With Password',
    tags: ['Customer'],
    summary: 'LOgin',
    body: {
        "type": "object",
        "properties": {
            "password": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "mobileNo": {
                "type": "string"
            },
        },
        "required": [
            "password"
        ]
    },
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failiure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "customerId":{
                            "type": "string"
                        },
                        "userName": {
                            "type": "string"
                        },
                        "mobileNo": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "password": {
                            "type": "string"
                        },
                        "otpVerified": {
                            "type": "boolean",
                            "default":false
                        },
                        "markForDelete":{   
                            "type":"boolean",
                            "default":false
                        },
                        "otp":{
                            "type":"string",
                            "default":""
                        
                        },
                        "googleId":{
                            "type":"string"
                        },
                        "faceBookId":{
                            "type":"string"
                        },
                    },
                    "required": [
                        "email",
                        "mobileNo",
                        "customerId",
                        "userName",
                        "password",
                        "otpVerified",
                    ]
            }
            },
            "required": [
                "status",
                "data"
            ]
        },
        400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

