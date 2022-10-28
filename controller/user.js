const {User} = require('../model/index')
const jwt = require('../util/jwt');
const {jwt_secret} = require('../config/config.default')

exports.login = async(req, res, next) => {
    try {
        // 处理请求
        let user = req.user.toJSON()
        // 数据验证
        console.log(user);
        // 生成token
        const token = await jwt.sign({
            userId: user._id  // 保存mongo时获得的id
        }, jwt_secret)

        //发送成功响应(包含token信息)
        delete user.password // 除去敏感信息
        res.status(200).json({
            ...user,
            token
        })
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