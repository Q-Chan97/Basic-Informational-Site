import http from 'node:http';
import fs from "node:fs";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    let path = "./pages/"
    
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/contact-me":
            path += "contact-me.html";
            res.statusCode = 200;
            break;
        default: 
            path += "404.html";
            res.statusCode = 404;
    }

    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
});

server.listen(8080, "localhost", () => {
    console.log("listening for server requests on 8080")
});