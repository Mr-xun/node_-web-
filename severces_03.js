const http = require("http");
const fs = require("fs");
const url = require("url");
//path模块
const path = require("path");
const mimeModel = require("./model/getmime");
http.createServer((req, res) => {
    //http://localhost:8001/index.html    /index.html
    let pathname = url.parse(req.url).pathname;
    if (pathname == "/") {
        pathname = "/index.html"; //默认加载首页
    }
    let extname = path.extname(pathname);
    if (pathname != "/favicon.ico") {
        //过滤轻轻favicon
        //文件操作
        fs.readFile("static" + pathname, (err, result) => {
            if (err) {
                fs.readFile("static/404.html", (error, data404) => {
                    res.writeHead(404, {
                        "Content-Type": "text/html;charset=utf-8"
                    });
                    res.write(data404);
                    res.end();
                });
            } else {
                //返回这个文件
                var mime = mimeModel.getMime(extname);
                res.writeHead(200, {
                    "Content-Type": mime + ";charset=utf-8"
                });
                res.write(result);
                res.end();
            }
        });
    }
}).listen(8001);
