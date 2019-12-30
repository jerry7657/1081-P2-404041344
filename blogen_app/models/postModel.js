const db = require("../utils/database");
const post = class post {
  constructor(id, title, category, message) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.message = message;
  }
  static fetchAll() {
    return db.execute("SELECT * FROM blogen.post");
  }
};
module.exports = post;
