"use strict"

const Constants = require("./constants");

class Response {
  static send(res, err, msg, data) {
    if (err !== undefined) {
      res.send({
        status: Constants.RESPONSE_FLAGS.ERROR,
        message: msg,
      });
    } else {
      res.send({
        status: Constants.RESPONSE_FLAGS.SUCCESS,
        message: "Succesful",
        data: data,
      });
    }
  }
}

module.exports = Response;
