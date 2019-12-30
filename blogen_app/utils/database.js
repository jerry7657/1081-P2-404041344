const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "1081-1a",
  password: "jerry0919"
});

//pool.query("SELECT * FROM post", function(err, results) {
//console.log(JSON.stringify(results));
//console.log("Database blogen connected.");
//});

module.exports = pool.promise();
