const express = require('express')

// 创建web服务器
const app = express()

// 调用express.static()方法，快速对外提供静态资源
app.use('/clock', express.static('./clock'))

// 启动web服务器
app.listen(80, function () {
    console.log('express server running at http://127.0.0.1');
})