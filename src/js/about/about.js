import fs from "node:fs";

function readAbout(res) {
  fs.readFile("./src/js/about/about.html", "utf-8", (error, data) => {
    if (!error) return res.end(data);
  });
}

export default readAbout;
