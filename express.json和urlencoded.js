const express = require('express')
const app = express()

// 解析json格式的请求体数据
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    // 使用req.body获得requestbody的数据
    console.log(req.body);  // 不配置解析表单数据的则默认为undefined
    res.send('ok')
})

app.post('/book', (req, res) => {
    console.log(req.body);
    res.send('ok')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})