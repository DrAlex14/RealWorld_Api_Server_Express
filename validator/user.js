const validate = require("../middleware/validate");
const {body} = require('express-validator')
const {User} = require('../model/index')

exports.signUp = validate([ //配置验证规则
    body('user.username')
    .notEmpty()
    .withMessage('用户名不能为空')
    .custom(async (username) => {
        const user = await User.findOne({username})
        if (user) {
            return Promise.reject('用户名已存在')
        }
    }),
    body('user.password').notEmpty().withMessage('密码不能为空'),
    body('user.email')
    .isEmail().withMessage('输入邮箱')
    .notEmpty().withMessage('邮箱不能为空')
    .bail() // 前面验证不通过则不执行，前面验证通过则执行
    .custom(async (email) => {
        const user = await User.findOne({email})
        if (user) {
            return Promise.reject('邮箱已存在')
        }
    })
])