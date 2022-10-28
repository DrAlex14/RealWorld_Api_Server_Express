const jwt = require('jsonwebtoken')
const {promisify} = require('util')


// // 生成jwt
// const token = jwt.sign({    //同步方法
//     foo: 'bar'
// }, 'zzy_secret')


// // 验证jwt 
// const verify = promisify(jwt.verify)
// async function decode() {
//     const item = await verify(token, 'zzy_secret')
//     console.log(item)
// }
// decode()


// 建议用异步方式
exports.sign = promisify(jwt.sign)
exports.verify = promisify(jwt.verify)
exports.decode = promisify(jwt.decode)
