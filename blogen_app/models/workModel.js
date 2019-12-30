const db = require("../utils/database");
const work = class work {
  constructor(id, title, message, img) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.message = message;
    this.img = img;
  }
  static fetchAll() {
    return db.execute("SELECT * FROM blogen.work");
  }
};
module.exports = work;
