const chai = require("chai");
const expect = chai.expect;

const MetricsValidator = require("../../routes/metrics/metricsValidator");

describe("metrics Validator", () => {
  let metricsValidator;

  before(() => {
    metricsValidator = new MetricsValidator();
  });

  it("should give error when value is not provided", () => {
    let output;
    const req = { params: { key: "key1" }, body: {} };
    const res = {
      send: function (value) {
        output = value;
      },
    };
    const next = () => {};
    metricsValidator.save(req, res, next);
    expect(output.status).equal(201);
    expect(output.message).equal("value is required");
  });

  it("should give error when key is not provided", () => {
    let output;
    const req = { params: {}, body: { value: "value" } };
    const res = {
      send: function (value) {
        output = value;
      },
    };
    const next = () => {};
    metricsValidator.save(req, res, next);

    expect(output.status).equal(201);
    expect(output.message).equal("key is required");
  });

  it("should give error when key is not provided", () => {
    let output;
    const req = { params: {} };
    const res = {
      send: function (value) {
        output = value;
      },
    };
    const next = () => {};
    metricsValidator.getRecentOneHourMetrics(req, res, next);
    expect(output.status).equal(201);
    expect(output.message).equal("key is required");
  });
});
