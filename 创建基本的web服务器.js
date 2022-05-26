// 1. 导入http模块
const http = require('http')

// 2. 创建web服务器实例
const server = http.createServer()

// 3. 为服务器绑定request事件
server.on('request', function (req, res) {
    var url = req.url
    var method = req.method
    var str = 'url地址为 ' + url + ', 请求方法为 ' + method
    console.log(str);
    // 设置响应头，解决中文乱码问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 调用res.end()方法，向客户端相应一些内容
    res.end(str)
})

// 4. 启动服务器
server.listen(80, function () {
    console.log('server running at http://127.0.0.1');
})