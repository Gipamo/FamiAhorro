const { Router } = require("express");
const router = Router();

const {
  getPrestamos,
  createPrestamo,
  getPrestamo,
  prestamoPayed,
  applyForPrestamo,
} = require("../controllers/prestamos.controller");

router.route("/:idIntegrante?").get(getPrestamos).post(createPrestamo);
router.route("/:idIntegrante/:apply").post(applyForPrestamo);

router.route("/:id").get(getPrestamo).put(prestamoPayed);

module.exports = router;
