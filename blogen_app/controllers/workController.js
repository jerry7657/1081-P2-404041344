const post = require("../models/workModel");

exports.getWork = (req, res, next) => {
  post.fetchAll().then(([rows]) => {
    //console.log(JSON.stringify(rows));
    //res.json(rows);
    res.render("work", { data: rows, title: "Work" });
  });
};
