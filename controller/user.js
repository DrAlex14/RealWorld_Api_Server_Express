const {User} = require('../model/index')

exports.login = async(req, res, next) => {
    try {
        // 处理请求
        res.send('post /users/login')
    } catch (error) {
        next(error)
    }
}

exports.signUp = async(req, res, next) => {
    try {
        // 处理请求
        console.log(req.body);

        // 数据验证
        
        // 验证通过, 保存到数据库
        let user = new User(req.body.user)
        await user.save()

        user = user.toJSON()
        delete user.password
        // 发送成功响应
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}

exports.getCurrentUser = async(req, res, next) => {
    try {
        // 处理请求
        res.send('get /user')
    } catch (error) {
        next(error)
    }
}

exports.updateCurrentUser = async(req, res, next) => {
    try {
        // 处理请求
        res.send('put /user')
    } catch (error) {
        next(error)
    }
}