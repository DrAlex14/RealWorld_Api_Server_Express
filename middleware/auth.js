const {verify} = require('../util/jwt')
const {jwt_secret} = require('../config/config.default')
const {User} = require('../model/index')

module.exports = async (req, res, next) => {
    // 获取请求token
    let token = req.headers['authorization']
    token = token ? token.split('Token ')[1] : null
    if (!token) {
        return res.status(401).send('token失效')
    }
    // 验证token是否有效
    try {
        const decodeToken = await verify(token, jwt_secret)
        console.log('decodeToken', decodeToken);
        req.user = await User.findById(decodeToken.userId)
        next()
    } catch (error) {
        return res.status(401).send(error)
    }
    // 无效->响应401
    // 有效->获取用户信息挂载到req请求体上
    // 往后继续执行
}