const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    { Client } = require("pg"),
    fs = require("fs"),
    goalController = require("./controllers/goalController");


app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", goalController.index);
app.get("/index", goalController.index);

app.post("/register", goalController.register, goalController.redirectView);


app.listen(8080);
console.log("server listening...");