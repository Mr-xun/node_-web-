const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    //http://localhost:8001/index.html    /index.html
    let pathname = req.url;
    if (pathname == "/") {
        pathname = "/index.html"; //默认加载首页
    }
    if (pathname != "/favicon.ico") {
        //过滤轻轻favicon
        console.log(pathname);
        //文件操作
        fs.readFile("static" + pathname, (err, result) => {
            if (err) {
                console.log(err, "404");
                return;
            } else {
                //返回这个文件
                console.log(result);
                res.writeHead(200, {
                    "Content-Type": "text/html;charset=utf-8"
                });
                res.write(result);
                res.end();
            }
        });
    }
}).listen(8001);
