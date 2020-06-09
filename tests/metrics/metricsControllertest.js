const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const MetricsDAO = require("../../routes/metrics/metricsDAO");
const MetricsService = require("../../routes/metrics/metricsService");
const MetricsController = require("../../routes/metrics/metricsController");

describe("Metrics Controller", async () => {
  let metricsService, metricsController, metricsDAO;

  before(() => {
    metricsDAO = new MetricsDAO();
    metricsService = new MetricsService(metricsDAO);
    metricsController = new MetricsController(metricsService);
  });

  it("Save the metric", async () => {
    const save = sinon.spy(metricsService, "save");
    const req = { params: { key: "key1" }, body: { value: "value1" } };
    const res = { send: () => {} };
    await metricsController.save(req, res);
    save.restore();
    expect(save.calledOnce).to.be.true;
  });

  it("Fetch the metric", async () => {
    const getRecentOneHourMetric = sinon.spy(metricsService, "getRecentOneHourMetric");
    const req = { params: { key: "key1" }};
    const res = { send: () => {} };
    await metricsController.getRecentOneHourMetrics(req, res);
    getRecentOneHourMetric.restore();
    expect(getRecentOneHourMetric.calledOnce).to.be.true;
  });
});
