const {Article} = require('../model/index')

exports.getArticleList = async(req, res, next) => {
    try {
        // 处理请求
        res.send(`get /articles`)
    } catch (error) {
        next(error)
    }
}

exports.feedArticle = async(req, res, next) => {
    try {
        // 处理请求
        res.send(`get /feed`)
    } catch (error) {
        next(error)
    }
}

exports.createArticle = async(req, res, next) => {
    try {
        // 处理请求
        console.log(req.user); //auth中间件将token解析的用户信息挂载到req中
        let article = new Article(req.body.article)
        article.author = req.user._id
        article.populate('author')  // 用户id映射数据库用户信息
        await article.save()
        res.status(201).json({
            article
        })
    } catch (error) {
        next(error)
    }
}

exports.updateArticle = async(req, res, next) => {
    try {
        // 处理请求
        res.send(`put /${req.params.slug}`)
    } catch (error) {
        next(error)
    }
}

exports.deleteArticle = async(req, res, next) => {
    try {
        // 处理请求
        res.send(`delete /${req.params.slug}`)
    } catch (error) {
        next(error)
    }
}