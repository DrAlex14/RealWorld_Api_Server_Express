const express = require('express')
const router = express.Router()

// 获取用户资料
router.get('/:username', async(req, res, next) => {
    try {
        // 处理请求
        res.send(`get /profiles/${req.params.username}`)
    } catch (error) {
        next(error)
    }
}) 

// 关注用户
router.post('/:username/follow', async(req, res, next) => {
    try {
        // 处理请求
        res.send(`get /profiles/${req.params.username}/follow`)
    } catch (error) {
        next(error)
    }
})

// 取消关注用户
router.delete('/:username/follow', async(req, res, next) => {
    try {
        // 处理请求
        res.send(`get /profiles/${req.params.username}/unfollow`)
    } catch (error) {
        next(error)
    }
})


module.exports = router