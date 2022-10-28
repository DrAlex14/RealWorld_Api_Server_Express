const validate = require("../middleware/validate");
const {body, param} = require('express-validator')
// const mongoose = require('mongoose')
const {Article} = require('../model/index')

exports.createArticle = validate([ //配置用户注册验证规则
    body('article.title').notEmpty().withMessage('title is required'),
    body('article.description').notEmpty().withMessage('description is required'),
    body('article.body').notEmpty().withMessage('body is required')
])

exports.getArticle = validate([
    validate.isValidObjectId(["params"], "articleId")
    // param("articleId").custom( async (value) => {
    //     if (!mongoose.isValidObjectId(value)) {
    //         return Promise.reject("文章ID类型错误");
    //     }
    // }),
]);

exports.updateArticle = [
    validate([
        validate.isValidObjectId(["params"], "articleId"),
    ]),
    //  检查文章是否存在
    async (req, res, next) => {
        const articleId = req.params.articleId
        const article = await Article.findById(articleId)
        if (!article) {
            return res.status(404).end()
        }
        req.article = article
        next()
    },
    //  检查是否为文章作者
    async (req, res, next) => {
        if (req.user._id.toString() !== req.article.author.toString()) {
            return res.status(403).end()
        }
        next()
    }
]

exports.deleteArticle = [
    validate([
        validate.isValidObjectId(["params"], "articleId"),
    ]),
    //  检查文章是否存在
    async (req, res, next) => {
        const articleId = req.params.articleId
        const article = await Article.findById(articleId)
        if (!article) {
            return res.status(404).end()
        }
        req.article = article
        next()
    },
    //  检查是否为文章作者
    async (req, res, next) => {
        if (req.user._id.toString() !== req.article.author.toString()) {
            return res.status(403).end()
        }
        next()
    }
]