const fs = require("fs"),
    { Client } = require("pg");

module.exports = {
    selectQuery: async function(queryText) {
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
        const queryResponse = await client.query(queryText);
        client.end();
        return queryResponse
    },

    insertQuery: async function(queryText, values) {
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
        
        await client.query(queryText, values)
            .then((res) => {
                console.log(res);
                client.end();
            })
            .catch( (e) => console.error(e.stack));
    }

}