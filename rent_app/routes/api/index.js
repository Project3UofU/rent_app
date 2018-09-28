const router = require("express").Router();
const landlordRoutes = require("./landlord");
const propertyRoutes = require("./property");
const unitRoutes = require("./unit");
const workOrderRoutes = require("./workorder");
const authRoutes = require("./auth");
const middleware = require("../../middleware");

router.use("/landlord", middleware.isAuthenticated, landlordRoutes);
router.use("/property", middleware.isAuthenticated, propertyRoutes);
router.use("/unit", middleware.isAuthenticated, unitRoutes);
router.use("/work_order", middleware.isAuthenticated, workOrderRoutes);
router.use("/auth", authRoutes);

module.exports = router;
