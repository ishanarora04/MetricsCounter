const chai = require("chai");
const faker = require("faker");
const sinon = require("sinon");
const moment = require("moment");

const expect = chai.expect;
const MetricsService = require("../../routes/metrics/metricsService");
const MetricsDAO = require("../../routes/metrics/metricsDAO");

describe("Metrics Service", async () => {
  let metricsService, metricsDAO, sandbox;

  before(() => {
    metricsDAO = new MetricsDAO();
    metricsService = new MetricsService(metricsDAO);
  });

  it("Should save an element", async () => {
    const save = sinon.spy(metricsDAO, "save");
    await metricsService.save();
    save.restore();
    expect(save.calledOnce).to.be.true;
  });

  it("Should sum by key and return the recent", async () => {
    const get = sinon.stub(metricsDAO, "get").returns([
      { date: moment().subtract(20, "minutes"), metric: 20 },
      { date: moment().subtract(10, "minutes"), metric: 19 },
    ]);
    const sum = await metricsService.getRecentOneHourMetric("key1");
    get.restore();
    expect(sum).to.equal(39);
  });
});
