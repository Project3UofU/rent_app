const router = require("express").Router();
const unitController = require("../../controllers/unitController");

// /unit/addTenant
router
  .route("/addTenant")
  .post(unitController.addTenant);

module.exports = router;
