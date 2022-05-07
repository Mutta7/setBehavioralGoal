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
  
router.get("/:id", function(req, res, next) {
    pool.query("SELECT * FROM action_goals_dev2 where id = $1", [id], function (error, result) {
        if (error) {
          throw error;
        }
        res.status(200).json({
          data: result.rows,
        });
      });
});

router.put("/:id", function(req, res, next) {
    const id = req.params.id;
    console.log(req.body);
    const {status} = req.body.put_data;
    console.log(status);
    pool.query(
        "UPDATE action_goals_dev2 SET status = $1 WHERE id = $2",
        [status, id],
        function(error, results) {
            if (error) {
                res.status(500).json({
                    status : "500 Inernal Server Error",
                    error: error,
                });
            }
            if (results.rowCount === 0) {
                res.status(400).json({
                    status: "400 Bad Request",
                    message: "data is not exist.",
                });
            } else {
                res.status(200).json({
                    status: "success",
                });
            }
        }
    );
});

module.exports = router