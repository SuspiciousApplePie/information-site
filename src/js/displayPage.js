import fs from "node:fs";

function displayPage(res, pageName) {
  fs.readFile(`src/templates/${pageName}.html`, "utf-8", (error, data) => {
    if (!error) return res.end(data);
  });
}

function displayError(res) {
  fs.readFile("src/templates/404.html", "utf-8", (error, data) => {
    if (error) {
      res.statusCode = 500;
      res.end("Something went wrong.");
    }
    res.end(data);
  });
}

export { displayPage, displayError };
