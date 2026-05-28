// Express
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const app = express();

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res, next) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, "/pages/index.html"), (error) => {
        if (error) next(error);
    });
})

app.get("/about", (req, res, next) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, "/pages/about.html"), (error) => {
        if (error) next(error);
    });
})

app.get("/contact-me", (req, res, next) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, "/pages/contact-me.html"), (error) => {
        if (error) next(error);
    });
})

app.use((req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, "/pages/404.html"));
})

app.use((error, req, res, next) => {
    console.error(error);
    res.status(404).sendFile(path.join(__dirname, "/pages/404.html"));
})

app.listen(PORT, (error) => {
    if (error) throw error;

    console.log(`Express Server running on port ${PORT}`);
})


// First Node version

// import http from 'node:http';
// import fs from "node:fs";

// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/html");

//     let path = "./pages/"
    
//     switch (req.url) {
//         case "/":
//             path += "index.html";
//             res.statusCode = 200;
//             break;
//         case "/about":
//             path += "about.html";
//             res.statusCode = 200;
//             break;
//         case "/contact-me":
//             path += "contact-me.html";
//             res.statusCode = 200;
//             break;
//         default: 
//             path += "404.html";
//             res.statusCode = 404;
//     }

//     fs.readFile(path, "utf8", (err, data) => {
//         if (err) {
//             console.error(err);
//             res.end();
//         } else {
//             res.write(data);
//             res.end();
//         }
//     })
// });

// server.listen(8080, "localhost", () => {
//     console.log("listening for server requests on 8080")
// });