const fs = require('fs')

fs.writeFile('content.txt', 'asdfcb\nsdfsdf', function (err) {
    if (err) {
        return console.log("文件写入失败！" + err.message);
    }
    console.log("文件写入成功！");
})