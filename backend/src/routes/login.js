const { Router } = require("express");
const router = Router();

const { getUser } = require("../controllers/login.controller");

router.route("/:email/:password").get(getUser);

module.exports = router;
