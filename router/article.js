const express = require('express')
const router = express.Router()
const articleCtrl = require('../controller/article')

// 文章列表
router.get('/', articleCtrl.getArticleList)

//  分类文章
router.get('/', articleCtrl.feedArticle)

// 查看文章
router.get('/:slug', )

// 写文章
router.post('/', articleCtrl.checkArticle)

// 修改文章
router.put('/:slug', articleCtrl.updateArticle)


//删除文章
router.delete('/:slug', articleCtrl.deleteArticle)

module.exports = router