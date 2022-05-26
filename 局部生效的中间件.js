const express = require('express')
const app = express()

const mw1 = (req, res, next) => {
    console.log('调用了1局部中间件')
    next()
}

const mw2 = (req, res, next) => {
    console.log('调用了2局部中间件')
    next()
}

// 同时使用多个局部中间件
app.get('/', [mw1, mw2], (req, res) => {
    res.send('Home page')
})

app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})