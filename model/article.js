const mongoose = require('mongoose')
const base_model = require('./base_model')

const articleSchema = new mongoose.Schema({
    ...base_model,
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    tagList: {
        type: [String],
        default: null
    },
    favorited: {
        type: Boolean,
        default: false
    },
    favoritesCount: {
        type: Number,
        default: 0
    },
    author: {  // 关联User用户
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
})

module.exports = articleSchema