const express = require('express')

// 创建web服务器
const app = express()

// 监听客户端的GET和POST请求
app.get('/user', (req, res) => {
    res.send({ name: 'chao', age: 18 })
})

app.post('/user', (req, res) => {
    res.send('请求成功')
})

// 通过req.query可以获得客户端发送过来的查询参数
app.get('/', (req, res) => {
    console.log(req.query);
    res.send(req.query)
})

// 通过req.params获得动态参数
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    res.send(req.params)
})


// 启动web服务器
app.listen(80, function () {
    console.log('express server running at http://127.0.0.1');
})