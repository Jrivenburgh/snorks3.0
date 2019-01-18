const router = require("express").Router();
const AnimalsController = require("../../controllers/AnimalsController");

// Matches with "/api/Animals"
router.route("/")
  .get(AnimalsController.findAll)
  .post(AnimalsController.create);

// Matches with "/api/Animals/:id"
router
  .route("/:id")
  .get(AnimalsController.findById)
  .put(AnimalsController.update)
  .delete(AnimalsController.remove);

module.exports = router;
