const { Router } = require("express");
const router = Router();

const {
  getEventos,
  createEvento,
  getEvento,
  deleteEvento,
  updateEvento,
} = require("../controllers/eventos.controller");

router.route("/").get(getEventos).post(createEvento);

router
  .route("/:id/:idIntegrante?")
  .get(getEvento)
  .delete(deleteEvento)
  .put(updateEvento);

module.exports = router;
