const router = require("express").Router();
const workOrderController = require("../../controllers/workOrderController");
let middleware = require("../../middleware");

// /api/work-order/add-comment
router
  .route("/addComment")
  .post(middleware.paramsCheck(["text", "workOrderID", ["tenantID", "landlordID"]])) // Requires a 'tenantID' or 'landlordID'
  .post(workOrderController.addComment);

// /api/work-order/add-comment
router
  .route("/update")
  .post(middleware.paramsCheck([["service", "description", "urgent", "read", "completed"]])) // Requires at least one of the following parameters to be valid
  .post(workOrderController.update);

module.exports = router;