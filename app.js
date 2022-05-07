const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    { Client } = require("pg"),
    fs = require("fs"),
    goalController = require("./controllers/goalController");

const apiSampleRouter = require("./routes/api_actionGoals");
//const apiSampleRouter = require("./controllers/apiController")

app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use("/api_actionGoals", apiSampleRouter);

app.get("/", goalController.index);
app.get("/index", goalController.index);

app.post("/register", goalController.register, goalController.redirectView);


app.listen(8080);
console.log("server listening...");