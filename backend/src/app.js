const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "famiahorropassword123",
    resave: true,
    saveUninitialized: true,
  })
);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Authentication and Authorization Middleware
var auth = function (req, res, next) {
  if (req.session && req.session.idIntegrante) return next();
  else return res.sendStatus(401);
};

// routes
app.use("/api/integrantes", auth, require("./routes/integrantes"));
app.use("/api/prestamos", auth, require("./routes/prestamos"));
app.use("/api/familias", auth, require("./routes/familias"));
app.use("/api/dineroFamilias", auth, require("./routes/dineroFamilias"));
app.use("/api/eventos", auth, require("./routes/eventos"));
app.use("/api/login", require("./routes/login"));
app.use("/api/logout", require("./routes/logout"));

module.exports = app;
