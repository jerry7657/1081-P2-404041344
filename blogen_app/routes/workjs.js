var express = require("express");
var router = express.Router();
const workController = require("../controllers/workController");
router.get("/", workController.getWork);

// router.get("/", function(req, res, next) {
//   res.render("dashboard", { title: "Blogen Dashoard" });
// });
module.exports = router;
