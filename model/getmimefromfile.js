exports.getMime = function(fs, extname) {
    //异步
    // fs.readFile("mime.json", (err, data) => {
    //     if (err) {
    //         console.log(err, "文件不存在");
    //         return false;
    //     }
    //     console.log(2);
    //     var Mimes = JSON.parse(data.toString());
    //     console.log(Mimes[extname]);
    //     return Mimes[extname] || "text/html";
    // });
    var data = fs.readFileSync("mime.json");
    var Mimes = JSON.parse(data.toString());
    return Mimes[extname] || "text/html";
};
