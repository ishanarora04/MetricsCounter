"use strict"

const moment = require("moment");
const Constants = require("../../lib/constants");
class MetricsService {
  constructor(metricsDAO) {
    this.metricsDAO = metricsDAO;
  }

  save = async (key, value) => {
    await this.metricsDAO.save(key, value);
  };

  getRecentOneHourMetric = async (key) => {
    const metrics = await this.metricsDAO.get(key);
    const now = moment();
    let sum = metrics.reduce((accumulator, element) => {
      const duration = moment.duration(now.diff(element["date"]));
      const hours = duration.asHours();
      if (hours <= Constants.RECENT_HOURS) {
        return accumulator + element["metric"];
      }
      return accumulator;
    }, 0);
    return parseInt(sum);
  };
}

module.exports = MetricsService;
