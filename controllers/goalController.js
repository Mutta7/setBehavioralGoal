const actionGoals = require("../models/actionGoal");
const redirectPath = "/index"

module.exports = {
    index: (req, res, next) => {
        const action_goals_arguments = actionGoals.getActionGoals;
        res.locals.action_goals_arguments = action_goals_arguments;
    },
    register: (req, res, next) => {
        const formData = req.body;
        actionGoals.registerActionGoal(formData);
        res.redirect(redirectPath);
    },
    complete: (req, res, next) => {

    },
    delete: (req, res, next) => {

    }
}