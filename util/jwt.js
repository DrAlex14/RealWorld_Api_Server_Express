const jwt = require('jsonwebtoken')
const {promisify} = require('util')


// 生成jwt

// const token = jwt.sign({    //同步方法
//     foo: 'bar'
// }, secret)


// 验证jwt 
// jwt.verify()

// 建议用异步方式

exports.sign = promisify(jwt.sign)
exports.verify = promisify(jwt.verify)
exports.decode = promisify(jwt.decode)
