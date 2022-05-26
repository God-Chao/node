console.log('加载了用户自定义模块.......');

var name = 'jc'

module.exports.username = 'chao'
module.exports.say = function () {
    console.log('hello')
}

module.exports = {
    nickname: 'xx',
    sayHi() {
        console.log('hi');
    }
}