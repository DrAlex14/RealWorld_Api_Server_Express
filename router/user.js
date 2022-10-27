const express = require('express')
const userCtrl = require('../controller/user')
const router = express.Router()
const userValidator = require('../validator/user')

// 用户登录
router.post('/users/login', userCtrl.login) 

// 用户注册
router.post('/users', userValidator.signUp,userCtrl.signUp) //执行路由方法
// router.post('/users', [ //配置验证规则
//     body('user.username')
//     .notEmpty()
//     .withMessage('用户名不能为空')
//     .custom(async (username) => {
//         const user = await User.findOne({username})
//         if (user) {
//             return Promise.reject('用户名已存在')
//         }
//     }),
//     body('user.password').notEmpty().withMessage('密码不能为空'),
//     body('user.email')
//     .isEmail().withMessage('输入邮箱')
//     .notEmpty().withMessage('邮箱不能为空')
//     .bail() // 前面验证不通过则不执行，前面验证通过则执行
//     .custom(async (email) => {
//         const user = await User.findOne({email})
//         if (user) {
//             return Promise.reject('邮箱已存在')
//         }
//     })
// ], (req, res, next) => {   // 判断验证结果
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.status(400).json({errors: errors.array()})
//     } 
//     next()
// },userCtrl.signUp) //执行路由方法

// 获取当前登录用户
router.get('/user', userCtrl.getCurrentUser) 

// 更新当前登录用户
router.put('/user', userCtrl.updateCurrentUser) 

module.exports = router