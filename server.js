const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send('<h1>Welcome to the Gitpub app!</h1>')
})

app.listen(3000, () => {
  console.log("App is running");
});
