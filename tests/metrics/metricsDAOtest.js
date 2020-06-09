const chai = require("chai");
const faker = require("faker");

const expect = chai.expect;
const MetricsDAO = require("../../routes/metrics/metricsDAO");

describe("test Metrics DAO", async () => {
  let metricsDAO;

  before(() => {
    metricsDAO = new MetricsDAO();
  });

  it("should provide an empty elem", async () => {
    const output = await metricsDAO.get(faker.name.firstName());
    expect(output.length).to.equal(0);
  });

  it("should save an element into the storage", async () => {
    const key = faker.name.firstName();
    const value = faker.random.number();
    await metricsDAO.save(key, value);
    const output = await metricsDAO.get(key);
    expect(output.length).to.equal(1);
    expect(output[0].metric).equal(value);
  });
});
