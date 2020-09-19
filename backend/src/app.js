const express = require("express");
const cors = require("cors");
const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/integrantes", require("./routes/integrantes"));
app.use("/api/prestamos", require("./routes/prestamos"));
app.use("/api/familias", require("./routes/familias"));
app.use("/api/dineroFamilias", require("./routes/dineroFamilias"));
app.use("/api/eventos", require("./routes/eventos"));

module.exports = app;
