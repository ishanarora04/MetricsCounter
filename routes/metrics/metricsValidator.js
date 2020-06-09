"use strict"

const Joi = require("joi");
const Response = require("../../lib/responses");
class MetricsValidator {
  save(req, res, next) {
    const schema = Joi.object().keys({
      key: Joi.string()
        .required()
        .error(() => {
          return { message: "key is required" };
        }),
      value: Joi.number()
        .required()
        .error(() => {
          return { message: "value is required" };
        }),
    });

    const result = Joi.validate(
      { key: req.params.key, value: req.body.value },
      schema
    );

    if (result.error == undefined) {
      next();
    } else {
      const message = result.error.details[0].message;
      Response.send(res, result.error, message);
    }
  }

  getRecentOneHourMetrics(req, res, next) {
    const schema = Joi.object().keys({
      key: Joi.string()
        .required()
        .error(() => {
          return { message: "key is required" };
        }),
    });

    const result = Joi.validate({ key: req.params.key }, schema);

    if (result.error == undefined) {
      next();
    } else {
      const message = result.error.details[0].message;
      Response.send(res, result.error, message);
    }
  }
}

module.exports = MetricsValidator;
