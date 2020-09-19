const { Schema, model } = require("mongoose");

const integranteSchema = new Schema({
  cedula: { type: Number, required: true, unique: true },
  id_familia: { type: String, required: true },
  usuario: { type: String, required: true },
  contrasena: { type: String, required: true },
  direccion: String,
  telefono: { type: String, required: true },
});

module.exports = model("Integrante", integranteSchema);
