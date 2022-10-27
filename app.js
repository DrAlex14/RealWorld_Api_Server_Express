const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router/index')
const errorHandler = require('./middleware/error-handler')

const app = express()

const PORT = process.env.PORT || 8888;

// 常用中间件配置
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())
require('./model/index')

app.use(router)

// 挂载服务端统一异常处理
app.use(errorHandler())

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})