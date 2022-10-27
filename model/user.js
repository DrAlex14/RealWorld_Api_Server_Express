const mongoose = require('mongoose')
const base_model = require('./base_model')
const md5 = require('../util/md5')

const userSchema = new mongoose.Schema({
    ...base_model,
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        set: (value) => md5(value),
        select: false  //返回信息中不包含password
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

module.exports = userSchema