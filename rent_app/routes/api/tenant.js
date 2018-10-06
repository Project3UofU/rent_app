const router = require("express").Router();
const tenantController = require("../../controllers/tenantController");
let middleware = require("../../middleware");

// /api/tenant/setup
router
  .route("/setup")
  .post(middleware.paramsCheck(["tenantID", "password"]))
  .post(tenantController.setup);

// /api/tenant/remove
router
.route("/remove")
.delete(middleware.paramsCheck(["id"]))
.delete(tenantController.remove);

module.exports = router;
