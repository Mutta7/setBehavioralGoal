const express = require("express"),
    router = express.Router();

const pool = require("../models/pool");

router.get("/", function (req, res, next) {
    pool.query("SELECT * FROM action_goals_dev2", function (error, result) {
      if (error) {
        throw error;
      }
      res.status(200).json({
        data: result.rows,
      });
    });
  });
  
  module.exports = router