// 创建网站服务器实现客户端和服务器端通信
const http = require('http');
//引入path
const path = require('path');
// 引入模板
const template = require('art-template');
//导入路由文件
const router = require('./router/index');
//引入时间处理格式
const dateFormat = require('dateformat');
// 设置模板跟目录
template.defaults.root = path.join(__dirname, 'view');
//设置模板时间默认处理格式
template.defaults.imports.dateformat = dateFormat;
//引入url
const url = require('url');
//引入静态资源访问
const serveStatic = require('serve-static');
//创建静态资源服务
const serve = serveStatic(path.join(__dirname, 'public'));

//创建web服务器
const app = http.createServer();

// 客户端发送请求
app.on('request', (req, res) => {
    //启动路由
    router(req, res, () => {});
    //静态资源访问
    serve(req, res, () => {})
    
    
})
// 监听端口
app.listen(8899);

