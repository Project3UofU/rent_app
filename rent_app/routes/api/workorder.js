const router = require("express").Router();
const workOrderController = require("../../controllers/workOrderController");
let middleware = require("../../middleware");

// /api/work_order/addComment
router
  .route("/addComment")
  .post(middleware.paramsCheck(["service", "unit", ["tenant", "landlord"]])) // Requires a 'tenant' or 'landlord'
  .post(workOrderController.addComment);


module.exports = router;