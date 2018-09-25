const router = require("express").Router();
const landlordController = require("../../controllers/landlordController");
let middleware = require("../../middleware");

// // TODO: Move the authentication part to a middleware.js file?
// var tokenAuthentication = function (req, res, next) {
//   console.log('TODO: Add Authentication');
//   next()
// }

// router.use("*", tokenAuthentication); // Any route added after this will use the `tokenAuthentication` middleware

// /api/landlord
router.route("/")
  .post(middleware.paramsCheck(["name", "password", "username"]))
  .post(landlordController.create);

// /api/landlord/test
router
  .route("/test")
  .get(landlordController.info);

// /api/landlord/:id
router
  .route("/:id")
  .get(landlordController.findById)
  .put(landlordController.update)
  .delete(landlordController.remove);

// /api/landlord/addProperty
router
  .route("/addProperty")
  .post(middleware.paramsCheck(["address", "name", "landlordID"]))
  .post(landlordController.addProperty);

module.exports = router;
