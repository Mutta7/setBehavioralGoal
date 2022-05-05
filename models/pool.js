const fs = require("fs"),
    { Pool } = require("pg");

const postgre_credential_text = fs.readFileSync("./secret/postgresql.json");
const postgre_credential_json = JSON.parse(postgre_credential_text);

const pool = new Pool({
    user: postgre_credential_json.username,
    host: "127.0.0.1",
    database: "nodedb_for_behavioralgoal",
    password: postgre_credential_json.password,
    port: 5432,
})

module.exports = pool;