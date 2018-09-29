const router = require("express").Router();
const tenantController = require("../../controllers/tenantController");
let middleware = require("../../middleware");

// /api/tenant/setup
router
  .route("/setup")
  .post(middleware.paramsCheck(["tenantID", "password"]))
  .post(tenantController.setup);

module.exports = router;
