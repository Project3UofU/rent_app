const router = require("express").Router();
const workOrderCommentController = require("../../controllers/workOrderCommentController");
let middleware = require("../../middleware");

// /api/workOrderComment/remove
router
  .route("/remove")
  .delete(middleware.paramsCheck(["id"]))
  .delete(workOrderCommentController.remove);

module.exports = router;