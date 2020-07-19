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
            },
            "token":{
                "type":"string"
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
                        // "token":{
                        //     "type":"string"
                        // }
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

exports.checkCredentials = {
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
                        "token":{
                            "type":"string"
                        },
                        // "_id":{
                        //     "type":"string"
                        // }
                    },
                    "required": [
                        "email",
                        "mobileNo",
                        "customerId",
                        "userName",
                        "otpVerified",
                        // "_id"
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

exports.customerFeedback = {
    description: 'Give Feedback on Product',
    tags: ['Customer'],
    summary: 'Feedback',
    body: {
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
            "productId": {
                "type": "string"
            },
            "rating": {
                "type": "number"
            },
            "feedback":{
                "type":"string"
            }
        },
        "required": [
            "customerId",
            "productId",
            "rating",
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
                        "customerId": {
                            "type": "string"
                        },
                        "productId": {
                            "type": "string"
                        },
                        "rating": {
                            "type": "number"
                        },
                        "feedback":{
                            "type":"string"
                        }
                    },
                    "required": [
                        "customerId",
                        "productId",
                        "rating",
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

exports.updateToken = {
    description: 'Update the Token',
    tags: ["Customer"],
    summary: 'Update',
    body:{
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
            "token": {
                "type": "string"
            },
    
        },
        "required": [
            "customerId",
            "token"
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