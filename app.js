// 打印hello world 宣告變數
var a=1;
console.log('hello world!!');
console.log(a);

//獲取 其他文件的變數
var content=require('./data/data.js');
console.log(content);
console.log(content.data);
console.log(content.bark());
console.log('----------');
console.log(__dirname);
console.log(__filename);

// http server 獲取 url method header socket.remoteAddress
var http = require('http');
http.createServer(function(request, response){
    console.log(request.url);
    //console.log(request.method);
    //console.log(request.headers);
    //console.log(request.socket.remoteAddress)
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write('<h1>hellow world!</h1>');
    response.end();
}).listen(8080);

var path = require('path');
//抓目錄路徑
console.log(path.dirname('/xx/yy/zz.js'));
// 路徑合併
console.log(path.join(__dirname,'/xx'));
// 抓檔名
console.log(path.basename('/xx/yy/zz.js'))
// 抓附檔名
console.log(path.extname(''))
// 分析路徑
console.log(path.parse('/xx/yy/zz.js'))

