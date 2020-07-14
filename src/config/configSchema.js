const configSchema = {
    "type": "object",
    "properties": {
        "server": {
            "type": "object",
            "properties": {
                "port": {
                    "type": "string"
                },
                "logLevel": {
                    "type": "string"
                }
            },
            "required": [
                "port",
                "logLevel"
            ]
        },
        "maxPaginationSize": {
            "type": "string"
        },
        "environment": {
            "type": "string"
        },
        "mongodb": {
            "type": "object",
            "properties": {
                "baseURL": {
                    "type": "string"
                },
                "dbName": {
                    "type": "string"
                },
                "debug": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "poolSize": {
                    "type": "integer"
                }
            },
            "required": [
                "baseURL",
                "dbName",
                "debug",
                "username",
                "password",
                "poolSize"
            ]
        }
    },
    "required": [
        "server",
        "maxPaginationSize",
        "environment",
        "mongodb"
    ]
}

module.exports = configSchema;
