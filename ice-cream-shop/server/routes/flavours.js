const express = require("express");
const {
  getFlavours,
  getFlavour,
  updateFlavour,
  createFlavour,
  deleteFlavour,
} = require("../controllers/flavours");

const router = express.Router();

router.route("/").get(getFlavours).post(createFlavour);

router.route("/:id").get(getFlavour).put(updateFlavour).delete(deleteFlavour);

module.exports = router;
