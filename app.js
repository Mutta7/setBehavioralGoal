const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    { Client } = require("pg"),
    fs = require("fs"),
    goalController = require("./controllers/goalController");


/*
const postgre_credential_text = fs.readFileSync("./secret/postgresql.json");
const postgre_credential_json = JSON.parse(postgre_credential_text);
    
const client = new Client({
    user: postgre_credential_json.username,
    host: "127.0.0.1",
    database: "nodedb_for_behavioralgoal",
    password: postgre_credential_json.password,
    port: 5432,
})
client.connect();
*/

app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", goalController.index);

app.post("/register", goalController.register);


app.listen(8080);
console.log("server listening...");