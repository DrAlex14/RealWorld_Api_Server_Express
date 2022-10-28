const {Article, User} = require('../model/index')

exports.getArticleList = async(req, res, next) => {
    try {
        const {
            limit = 20, 
            offset = 0,
            tag,
            author
        } = req.query 
        const filter = {}
        if (tag) {
            filter.tagList = tag   // mongdb中包含tag就能查出
        }
        if (author) {
            const user = await User.findOne({username: author})
            filter.author = user ? user._id : null
        }
        const articleCount = await Article.countDocuments()
        const articles = await Article.find(filter)
            .skip(offset) // 跳过条数
            .limit(limit) // 取出条数
            .sort({
                // -1倒叙, 1正序
                createdAt: -1
            })
        // 处理请求
        res.status(200).json({
            articles,
            articleCount
        })
    } catch (error) {
        next(error)
    }
}

exports.getArticle = async(req, res, next) => {
    try {
        const article = await Article.findById(req.params.articleId).populate('author')
        if (!article) {
            return res.status(404).end()
        }
        res.status(200).json({
            article
        })
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
        const article = req.article
        const bodyArticle = req.body.article
        article.title = bodyArticle.title || article.title
        article.description = bodyArticle.description || article.description
        article.body = bodyArticle.body || article.body
        await article.save();
        res.status(201).json({
            article
        })
    } catch (error) {
        next(error)
    }
}

exports.deleteArticle = async(req, res, next) => {
    try {
        // 处理请求
        const article = req.article
        await article.remove()
        res.status(204).end()
    } catch (error) {
        next(error)
    }
}