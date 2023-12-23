'use strict'

const dev = {
    app: {
        port: process.env.APP_PORT || 3000
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '27017',
        name: process.env.DB_NAME || 'dbShopDev',
        username: process.env.DB_USERNAME || 'duclinh2207',
        password: process.env.DB_PASSWORD || 'duclinh123'
    }
}

const pro = {
    app: {
        port: 3000
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '27017',
        name: process.env.DB_NAME || 'dbShopPro',
        username: process.env.DB_USERNAME || 'duclinh2207',
        password: process.env.DB_PASSWORD || 'duclinh123'
    }
}

const config = {dev, pro}
const env = process.env.APP_ENV || 'dev'

module.exports = config[env]