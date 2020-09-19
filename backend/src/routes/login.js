const { Router } = require("express");
const router = Router();

const { getUser } = require("../controllers/login.controller");

router.route("/:user/:password").get(getUser);

module.exports = router;
