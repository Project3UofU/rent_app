const router = require("express").Router();
const landlordRoutes = require("./landlord");
const propertyRoutes = require("./property");
const unitRoutes = require("./unit");
const authRoutes = require("./auth");

// Book routes
router.use("/landlord", landlordRoutes);
router.use("/property", propertyRoutes);
router.use("/unit", unitRoutes);
router.use("/auth", authRoutes);

module.exports = router;
