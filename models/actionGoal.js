/*
actionGoals = {
    id: int,
    content: string,
    status: [working, completed]
}
*/
const fs = require("fs"),
    { Client } = require("pg");
const dbConnector = require("./dbConnector");

module.exports = {
    getActionGoals: async function (){
       const getActionGoalQuery = "SELECT * FROM action_goals_dev2"
       const res = await dbConnector.selectQuery(getActionGoalQuery);
       return res.rows;
    },

    registerActionGoal: async function(formData) {
        const registerActionGoal = "INSERT INTO action_goals_dev2 (id, goal_content, status) VALUES ($1, $2, $3)"
        const id = formData.id;
        const goal_content = formData.goal_content;
        const status = formData.status;
        const values = [id, goal_content, status];
  
        await dbConnector.insertQuery(registerActionGoal, values);
    }
}