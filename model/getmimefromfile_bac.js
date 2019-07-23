exports.getMime = function(fs, extname) {
    //异步
    fs.readFile("mime.json", (err, data) => {
        if (err) {
            console.log(err, "文件不存在");
            return false;
        }
        var Mimes = JSON.parse(data.toString());
        console.log(Mimes[extname]);
        return Mimes[extname] || "text/html";
    });
};
