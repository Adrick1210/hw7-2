const express = require("express");

const app = express();

const drinks = require("./models/drinks.js");

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Gitpub app!</h1>");
});

app.get("/drinks", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("App is running");
});
