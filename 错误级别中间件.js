const express = require('express')
const app = express()

app.get('/', (req, res) => {
    throw new Error('发生错误！')
    res.send('home page')
})

// 定义全局异常处理中间件，必须放最后
app.use((err, req, res, next) => {
    console.log('发生了错误！' + err.message)
    res.send('Error: ' + err.message)
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})