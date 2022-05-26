const express = require('express')
const app = express()

// 注册为全局生效的中间件函数
app.use((req, res, next) => {
    console.log('第一个全局中间件')
    next()
})

app.use((req, res, next) => {
    console.log('第二个全局中间件')
    next()
})

//  
app.get('/', (req, res) => {
    res.send('Home page')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})