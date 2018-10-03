const router = require("express").Router();
const landlordRoutes = require("./landlord");
const propertyRoutes = require("./property");
const tenantRoutes = require("./tenant");
const unitRoutes = require("./unit");
const workOrderRoutes = require("./workorder");
const authRoutes = require("./auth");
const middleware = require("../../middleware");

router.use("/landlord", middleware.isAuthenticated, landlordRoutes);
router.use("/property", middleware.isAuthenticated, propertyRoutes);
router.use("/tenant", middleware.isAuthenticated, tenantRoutes);
router.use("/unit", middleware.isAuthenticated, unitRoutes);
router.use("/workOrder", middleware.isAuthenticated, workOrderRoutes);
router.use("/auth", authRoutes);

module.exports = router;
