const { Router } = require("express");
const router = Router();

const {
  getIntegrantes,
  createIntegrante,
  getIntegrante,
  deleteIntegrante,
  updateIntegrante,
} = require("../controllers/integrantes.controller");

router.route("/").get(getIntegrantes).post(createIntegrante);

router
  .route("/:id")
  .get(getIntegrante)
  .delete(deleteIntegrante)
  .put(updateIntegrante);

module.exports = router;
