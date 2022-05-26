const path = require('path')
const http = require('http')
const fs = require('fs')

// 创建web服务器
const server = http.createServer()

// 监听服务器的request事件
server.on('request', function (req, res) {
    // 获取客户端url地址
    var url = req.url
    // 把请求的url映射为本地文件的存放路径
    let fpath = ''
    if (url == '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, '/clock', url)
    }
    // 根据映射的文件路径读取文件内容
    fs.readFile(fpath, 'utf8', function (err, dataStr) {
        if (err) return res.end('404 Not found')
        res.end(dataStr)
    })
})

// 启动服务器
server.listen(80, function () {
    console.log('server running at http://127.0.0.1');
})
