/*
actionGoals = {
    id: int,
    content: string,
    status: [working, completed]
}
*/
const fs = require("fs"),
    { Client } = require("pg");

module.exports = {
    getActionGoals: function (){
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

        const getActionGoalQuery = "SELECT * FROM action_goals_dev2"
        let action_goals_arguments = null;
        client.query(getActionGoalQuery, (err, res) => {
            if (err) throw err;
            console.log(res.rows);
            action_goals_arguments = res.rows;
            client.end();
            //return res.rows;
        })
        return action_goals_arguments;
    },

    registerActionGoal: function(formData) {
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

        const registerActionGoal = "INSERT INTO action_goals_dev2 (id, goal_content, status) VALUES ($1, $2, $3)"
        const id = formData.id;
        const goal_content = formData.goal_content;
        const status = formData.status;
        const values = [id, goal_content, status];
    
        client.query(registerActionGoal, values)
            .then((res) => {
                console.log(res);
                client.end();
            })
            .catch( (e) => console.error(e.stack));
    }
}