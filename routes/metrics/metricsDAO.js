const moment = require("moment");

class MetricsDAO {
  constructor() {
    this.storage = {};
  }

  save = async (key, value) => {
    if (this.storage[key] == undefined) {
      this.storage[key] = [];
    }
    this.storage[key].push({ date: moment.now(), metric: value });
  };

  get = async (key) => {
    if (this.storage[key] != undefined) {
      return this.storage[key];
    }
    return [];
  };
}

module.exports = MetricsDAO;
