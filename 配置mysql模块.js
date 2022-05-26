const mysql = require('mysql')

const db = mysql.createPool({
    host: '120.76.246.175',
    user: 'chao',
    password: 'chao',
    database: 'cblog'
})

// 查询语句
const sqlStr1 = 'select * from admin'
db.query(sqlStr1, (err, results) => {
    if (err) {
        return console.log('查询失败：' + err.message)
    }
    console.log(results)
})

// 插入语句
const admin1 = { admin_name: '路飞', account: '123456789', password: '999' }
const sqlStr2 = 'insert into admin set ?'
db.query(sqlStr2, admin1, (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
        console.log('插入数据成功')
    }
})

// 更新语句
const admin2 = { admin_name: '路飞', account: '123456789', password: '666' }
const sqlStr3 = 'update admin set ? where account= ?'
db.query(sqlStr3, [admin2, admin2.account], (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
        console.log('更新成功')
    }
})

// 删除语句
const admin3 = { admin_name: '路飞', account: '123456789', password: '666' }
const sqlStr4 = 'delete from  admin where account= ?'
db.query(sqlStr4, admin3.account, (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
        console.log('删除成功')
    }
})
