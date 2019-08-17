//引入连接数据库
require('./connect');
const mongoose = require('mongoose');
//创建集合
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 8
    },
    age: {
        type: Number,
        min: 15,
        max: 30
    },
    sex: String,
    email: String,
    hobbies: [String],
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now
    }
})
//创建用户集合应用规则
const User = mongoose.model('users', userSchema);
//User.create({name: 'zs', age: 20, sex: '男', email: '111@test.com', hobbies: ['唱歌'], collage: '前端'});
//导出
module.exports = User;
