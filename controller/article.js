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

exports.checkArticle = async(req, res, next) => {
    try {
        // 处理请求
        res.send(`get /${req.params.slug}`)
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