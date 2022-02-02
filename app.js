const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

// Enrutado
app.get("/", (req, res) => {
  res.render("index-page");
});

app.get("/about", (req, res) => {
  res.render("about-page");
});

app.get("/works", (req, res) => {
  res.render("works-page");
});

app.get("/gallery", (req, res) => {
  res.render("gallery-page");
});

app.listen(5005, () => console.log("Server running in port 5005"));
