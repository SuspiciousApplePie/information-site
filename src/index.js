import { displayError, displayPage } from "./js/displayPage.js";

import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  displayPage(res, "index");
});

app.get("/about", (req, res) => {
  displayPage(res, "about");
});

app.get("/contact", (req, res) => {
  displayPage(res, "contact");
});

app.use((req, res) => {
  displayError(res);
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
});
