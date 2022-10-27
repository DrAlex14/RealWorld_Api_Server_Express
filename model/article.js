const mongoose = require('mongoose')
const base_model = require('./base_model')

const articleSchema = new mongoose.Schema({
    ...base_model,
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    bio: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    }
})

module.exports = articleSchema