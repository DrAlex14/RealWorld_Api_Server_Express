const validate = require("../middleware/validate");
const {body} = require('express-validator')
const {User} = require('../model/index')
const md5 = require('../util/md5')

exports.signUp = validate([ //配置用户注册验证规则
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

exports.login = [
    validate([ //配置用户登录验证规则
        body('user.email').notEmpty().withMessage('邮箱不能为空').isEmail().withMessage('请输入邮箱格式'),
        body('user.password').notEmpty().withMessage('密码不能为空')
    ]),
    validate([
        body('user.email').custom(async (email, {req}) => {
            const user = await User.findOne({email}).select(['password', 'username', 'email', 'bio', 'image'])
            if (!user) {
                return Promise.reject('用户不存在')
            }
            console.log(user)
            req.user = user
        })
    ]),
    validate([
        body('user.password').custom(async (password, {req}) => {
            if (md5(password) !== req.user.password) {
                return Promise.reject('用户密码输入错误')
            }
        })
    ])
]