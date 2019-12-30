const post = require("../models/postModel");

exports.getPost = (req, res, next) => {
  post.fetchAll().then(([rows]) => {
    //console.log(JSON.stringify(rows));
    //res.json(rows);
    res.render("dashboard", { data: rows, title: "dashboard" });
  });
};
