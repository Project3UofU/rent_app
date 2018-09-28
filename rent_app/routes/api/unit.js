const router = require("express").Router();
const unitController = require("../../controllers/unitController");
let middleware = require("../../middleware");

// /api/unit/addTenant
router
  .route("/addTenant")
  .post(middleware.isLandlord) // Only landlords can add tenants
  .post(middleware.paramsCheck(["name", "phone", "email", "preferredMethodOfContact", "password", "unitID"]))
  .post(unitController.addTenant);

// /api/unit/landlord/:id (id = unitID)
// router
//   .route("/landlord/:id")
//   .get(unitController.landlord); // Not currently needed

// /api/unit/addWorkOrder
router
.route("/addWorkOrder")
.post(middleware.paramsCheck(["name", "phone", "email", "preferredMethodOfContact", "password", "unitID"]))
.post(unitController.addTenant);

module.exports = router;
