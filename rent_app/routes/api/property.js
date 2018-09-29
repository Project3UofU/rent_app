const router = require("express").Router();
const propertyController = require("../../controllers/propertyController");
let middleware = require("../../middleware");

// /api/property/addUnit
router
  .route("/addUnit")
  .post(middleware.paramsCheck(["rent", "securityDeposit", "name", "propertyID"]))
  .post(propertyController.addUnit);

module.exports = router;
