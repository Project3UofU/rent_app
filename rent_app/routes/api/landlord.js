const router = require("express").Router();
const landlordController = require("../../controllers/landlordController");

// Matches with "/api/landlord"
router.route("/")
  .get(landlordController.findAll)
  .post(landlordController.create);

// Matches with "/api/landlord/:id"
router
  .route("/:id")
  .get(landlordController.findById)
  .put(landlordController.update)
  .delete(landlordController.remove);

// /landlord/addProperty
router
  .route("/addProperty")
  .post(landlordController.addProperty);

module.exports = router;
