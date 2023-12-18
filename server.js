// start app
const express = require("express");
const app = express();
const morgan = require("morgan");

// declare variables
const drinks = require("./models/drinks.js");
const food = require("./models/food.js");

// Middleware
app.use(express.static("public"));
app.use(morgan("dev"));

// Index Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Gitpub app!</h1>");
});

app.get("/menu", (req, res) => {
  res.render("index.ejs", { drinks, food });
});

// Show Routes
app.get("/drinks/:id", (req, res) => {
  const id = req.params.id;
  const drinkItem = drinks[id];
  res.render("showD.ejs", { drinkItem, id });
});

app.get("/food/:id", (req, res) => {
  const id = req.params.id;
  const foodItem = food[id];
  res.render("showF.ejs", { foodItem, id });
});

// Listener
app.listen(3000, () => {
  console.log("App is running");
});
