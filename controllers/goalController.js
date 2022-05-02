const actionGoals = require("../models/actionGoal");
const redirectPath = "index"

module.exports = {
    index: async (req, res, next) => {
        const action_goals_arguments = await actionGoals.getActionGoals();
        console.log("action_goals_arguments : " + action_goals_arguments);
        res.locals.action_goals_arguments = action_goals_arguments;
        res.render("index");
    },
    register: (req, res, next) => {
        const formData = req.body;
        actionGoals.registerActionGoal(formData);
        next();
        //res.redirect(redirectPath);
    },
    redirectView: (req, res, next) => {
        res.redirect(redirectPath);
    },
    complete: (req, res, next) => {

    },
    delete: (req, res, next) => {

    }
}