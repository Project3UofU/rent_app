const router = require("express").Router();
const propertyController = require("../../controllers/propertyController");

// /property/addProperty
router
  .route("/addUnit")
  .post(propertyController.addUnit);

module.exports = router;
