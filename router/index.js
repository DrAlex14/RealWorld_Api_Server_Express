const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello world')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('hello world')
})

// 用户相关路由
router.use('/api', require('./user'))

// 用户资料相关路由
router.use('/api/profiles', require('./profile'))

// 文章相关路由
router.use('/api/articles', require('./article'))

// 标签相关路由
router.use('/api/tags', require('./tag'))

module.exports = router