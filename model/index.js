const mongoose = require('mongoose');
const { dbUrl } = require('../config/config.default');

// 连接mongodb
mongoose.connect(dbUrl);

const db = mongoose.connection

// 连接失败时
db.on('error', err => {
    console.log('数据库连接失败', err);
})

// 连接成功时
db.on('open', () => {
    console.log('数据库连接成功');
})

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// 导出组织模型
module.exports = {
    User: mongoose.model('User', require('./user')),
    Article: mongoose.model('Article', require('./article'))
}