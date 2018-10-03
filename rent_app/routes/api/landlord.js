const router = require("express").Router();
const landlordController = require("../../controllers/landlordController");
let middleware = require("../../middleware");

// /api/landlord
// router.route("/")
//   .post(landlordController.create); // Not currently needed

// /api/landlord/:id
router
  .route("/:id")
  .put(landlordController.update)
// .get(landlordController.findById) // Not currently needed
// .delete(landlordController.remove); // Not currently needed

// /api/landlord/addProperty
router
  .route("/addProperty")
  .post(middleware.paramsCheck(["city", "state", "zip"
  // ,"landlordID"
]))
  .post(landlordController.addProperty);

module.exports = router;
