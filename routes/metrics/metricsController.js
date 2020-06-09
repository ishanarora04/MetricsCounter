"use strict";

const moment = require("moment");
const Response = require("../../lib/responses");

class MetricsController {
  constructor(metricsService) {
    this.metricsService = metricsService;
  }

  save = async (req, res) => {
    try {
      const key = req.params.key;
      const value = req.body.value;
      await this.metricsService.save(key, value);
      return Response.send(res, undefined);
    } catch (err) {
      console.log(err);
      return Response.send(res, err, err.msg || err.messge);
    }
  };

  getRecentOneHourMetrics = async (req, res) => {
    try {
      const key = req.params.key;
      const output = await this.metricsService.getRecentOneHourMetric(key);
      return Response.send(res, undefined, undefined, output);
    } catch (err) {
      console.log(err);
      return Response.send(res, err, err.msg || err.messge);
    }
  };
}

module.exports = MetricsController;
