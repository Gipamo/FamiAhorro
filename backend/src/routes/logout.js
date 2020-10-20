const { Router } = require("express");
const router = Router();

const { closeSession } = require("../controllers/logout.controller");

router.route("/").get(closeSession);

module.exports = router;
