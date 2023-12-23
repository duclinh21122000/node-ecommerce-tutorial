'use strict'

const mongoose = require('mongoose')
const { countConnect } = require('../helpers/check.connect')
const connectString = "mongodb+srv://duclinh2207:duclinh123@cluster0.0yjitof.mongodb.net/?retryWrites=true&w=majority";

class Database {
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if (1===1) {
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }

        mongoose.connect(connectString, {
            maxPoolSize: 50
        }).then(_ => {
            countConnect()
            console.log('Connect Mongodb Success')
        }).catch(error => {
            console.log('Error Connect!')
        })        
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb