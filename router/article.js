const express = require('express')
const router = express.Router()
const articleCtrl = require('../controller/article')
const auth = require('../middleware/auth')
const articleValidate = require('../validator/article')

// 文章列表
router.get('/', auth, articleCtrl.getArticleList)

//  分类文章
router.get('/feed', articleCtrl.feedArticle)

// 查看文章
router.get('/:articleId', articleValidate.getArticle, articleCtrl.getArticle)

// 创建文章
router.post('/', auth, articleValidate.createArticle, articleCtrl.createArticle)

// 修改文章
router.put('/:articleId', auth, articleValidate.updateArticle, articleCtrl.updateArticle)


//删除文章
router.delete('/:articleId', auth, articleValidate.deleteArticle, articleCtrl.deleteArticle)

module.exports = router