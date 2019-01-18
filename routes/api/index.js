const router = require("express").Router();
const AnimalRoutes = require("./Animals");

// Animal routes
router.use("/Animals", AnimalRoutes);

module.exports = router;
