const express = require("express");

const app = express();

const drinks = require("./models/drinks.js");

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Gitpub app!</h1>");
});

app.get("/drinks", (req, res) => {
  res.render("index.ejs", { drinks });
});

// Index Route
// app.get("/drinks/:id", (req, res) => {
//   res.send(req.params.id);
// });

// Show Route
app.get("/drinks/:id", (req, res) => {
  const id = req.params.id;
  const drink = drinks[id];
  // res.send(drink);
  res.render("show.ejs", { drink, id });
});

app.listen(3000, () => {
  console.log("App is running");
});
