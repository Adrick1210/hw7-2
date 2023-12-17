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

app.get("/drinks", (req, res) => {
  res.render("index.ejs", { drinks, food });
});

app.get("/food", (req, res) => {
  res.render("index.ejs", { drinks, food });
});

// Show Route
app.get("/drinks/:id", (req, res) => {
  const id = req.params.id;
  const drinkItem = drinks[id];
  console.log("drinkItem:", drinkItem);
  res.render("show.ejs", { drinkItem, id });
});

app.get("/food/:id", (req, res) => {
  const id = req.params.id;
  const foodItem = food[id];
  console.log("foodItem:", foodItem);
  res.render("show.ejs", { foodItem, id });
});

app.listen(3000, () => {
  console.log("App is running");
});
