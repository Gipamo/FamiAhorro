const { Router } = require("express");
const router = Router();

const {
  getFamilias,
  createFamilia,
  getFamilia,
  deleteFamilia,
  updateFamilia,
} = require("../controllers/familias.controller");

router.route("/").get(getFamilias).post(createFamilia);

router.route("/:id").get(getFamilia).delete(deleteFamilia).put(updateFamilia);

module.exports = router;
