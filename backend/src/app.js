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
    secret: process.env.SECRET,
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
app.use("/api/logout", require("./routes/logout"));
app.use("/api/login", require("./routes/login"));

module.exports = app;
