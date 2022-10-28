const validate = require("../middleware/validate");
const {body} = require('express-validator')
// const {Article} = require('../model/index')

exports.createArticle = validate([ //配置用户注册验证规则
    body('article.title').notEmpty().withMessage('title is required'),
    body('article.description').notEmpty().withMessage('description is required'),
    body('article.body').notEmpty().withMessage('body is required')
])