const { Router } = require("express");
const router = Router();

const {
  getDineroFamilia,
  createDineroFamilia,
  deleteDineroFamilia,
  withdrawMoney,
  depositMoney,
} = require("../controllers/dineroFamilia.controller");

router.route("/").post(createDineroFamilia);

router.route("/:id").get(getDineroFamilia).delete(deleteDineroFamilia);

router.route("/:id/:idIntegrante/:withdraw").post(withdrawMoney);
router.route("/:id/:idIntegrante/:deposit").post(depositMoney);

module.exports = router;
