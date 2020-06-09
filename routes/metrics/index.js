const router = require("express").Router();

const MetricsController = require("./metricsController");
const MetricsService = require("./metricsService");
const MetricsDAO = require("./metricsDAO");
const MetricsValidator = require("./metricsValidator");

const metricsValidator = new MetricsValidator();
const metricsDAO = new MetricsDAO();
const metricsService = new MetricsService(metricsDAO);
const metricsController = new MetricsController(metricsService);

router.post("/metrics/:key", metricsValidator.save, metricsController.save);
router.get(
  "/metrics/:key/sum",
  metricsValidator.getRecentOneHourMetrics,
  metricsController.getRecentOneHourMetrics
);


module.exports = router;
