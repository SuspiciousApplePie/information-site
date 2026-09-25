import http from "node:http";
import readAbout from "./js/about/about.js";

const PORT = 9000;

console.log(`Running in localhost:${PORT}`);

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET" && req.url === "/") {
      res.end("Home");
    } else if (req.method === "GET" && req.url === "/about") {
      readAbout(res);
    } else if (req.method === "GET" && req.url === "/contact") {
      res.end("Contact");
    } else {
      res.statusCode = 404;
      throw new Error("404 Page not found");
    }
  } catch {
    res.end("404");
  }
});

server.listen(PORT);
