const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    { Client } = require("pg"),
    fs = require("fs");

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

app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/register", (req, res) => {
    const registerActionGoal = "INSERT INTO action_goals_dev (id, goal_content) VALUES ($1, $2)"
    const values = [1, `${req.body.action_goal}`];
    
    client.query(registerActionGoal, values)
        .then((res) => {
            console.log(res);
            client.end();
        })
        .catch( (e) => console.error(e.stack));
    
    res.render()
    res.send('action_goals_list', {goal: `${req.body.action_goal}`});
    
    
});


app.listen(8080);
console.log("server listening...");