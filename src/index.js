import http from "node:http";
import { displayError, displayPage } from "./js/displayPage.js";

const PORT = 8000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    displayPage(res, "index");
  } else if (req.method === "GET" && req.url === "/about") {
    displayPage(res, "about");
  } else if (req.method === "GET" && req.url === "/contact") {
    displayPage(res, "contact");
  }
  res.statusCode = 404;
  displayError(res);
});

server.listen(PORT);
