// 连接数据库并根据需求设计学员信息表
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost:27017/student', { useNewUrlParser: true })
    .then(() => {
    console.log('连接成功')
    })
    .catch((err) => {
        console.log('连接失败')
    })