const router = require("express").Router();
const landlordRoutes = require("./landlord");

// Book routes
router.use("/landlord", landlordRoutes);

module.exports = router;
