const express = require('express')
const router = express.Router()

// 文章列表
router.get('/', async(req, res, next) => {
    try {
        // 处理请求
        res.send(`get /tags`)
    } catch (error) {
        next(error)
    }
})

module.exports = router