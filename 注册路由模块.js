const express = require('express')
const app = express()

// 导入路由模块
const router = require('./路由模块.js')

// 注册路由模块
app.use('/api', router)

// 启动web服务器
app.listen(80, function () {
    console.log('express server running at http://127.0.0.1');
})