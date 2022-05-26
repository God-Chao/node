const express = require('express')
const app = express()

// // 定义一个最简单的中间件函数
// const mw = function (req, res, next) {
//     console.log('简单的中间件函数')
//     next()
// }

// // 注册为全局生效的中间件函数
// app.use(mw)
app.use((req, res, next) => {
    console.log('简单的中间件函数')
    const time = Date.now()
    // 为req对象挂载自定义属性
    req.time = time
    next()
})

app.get('/', (req, res) => {
    res.send('Home page' + req.time)
})
app.get('/user', (req, res) => {
    res.send('User page' + req.time)
})


app.listen(80, () => {
    console.log('http://127.0.0.1')
})