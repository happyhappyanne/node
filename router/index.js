//路由文件
//引入路由
const getRouter = require('router');
// 引入模板
const template = require('art-template');
//引入静态资源访问
const serveStatic = require('serve-static');
//引入queryString
const queryString = require('querystring');
//导入数据库
const User = require('../model/users');
//创建路由
const router = getRouter();
//创建静态资源服务
const serve = serveStatic('../public');
//const html = template('../view', {});
//添加
router.get('/add', (req, res) => {
    let html = template('../view/index.art', {});
    res.end(html);
})
//列表
router.get('/list', async (req, res) => {
    //获取用户列表
    let students = await User.find();
    let html = template('../view/list.art', {students});
    res.end(html);
})
//添加用户
router.post('/add', (req, res) => {
    let formPara = '';
    req.on('data', param => {
        formPara += param;
    })
    req.on('end', async () => {
        //插入数据
        await User.create(queryString.parse(formPara))
            .then(() => console.log('ok'))
            .catch(() => console.log('error'));
        //重定向
        res.writeHead(301, {
            Location: '/list'
        })
        res.end();
    })
})
module.exports = router;