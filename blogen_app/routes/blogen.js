var express = require("express");
var router = express.Router();
const dashboardController = require("../controllers/dashboardController");
router.get("/", dashboardController.getPost);

// router.get("/", function(req, res, next) {
//   res.render("dashboard", { title: "Blogen Dashoard" });
// });
module.exports = router;
