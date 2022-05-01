const { Client } = require("pg");
const fs = require("fs");

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
/*
var insertQuery = {
    text: "INSERT INTO member_dev VALUES ($1, $2)",
    values: [1, "John Smith"],
};
*/

var selectQuery = {
    text: "SELECT * FROM action_goals_dev2",
}

/*
const testFunc = () =>{
    client.query(selectQuery)
    .then((res) => {
        console.log(res.rows);
        client.end();
        return res.rows
    })
    .catch( (e) => console.error(e.stack));
}


const goal_list = testFunc();
console.log(goal_list);
*/

client.query(selectQuery)
    .then((res) => {
        console.log(res);
        console.log(res.rows[1]);
        client.end();
    })
    .catch( (e) => console.error(e.stack));
