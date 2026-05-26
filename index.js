import http from 'node:http';
import fs from "node:fs";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    let path = "./pages/"
    if (req.url === "/") {
        path += "index.html";
        req.statusCode = 200;
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