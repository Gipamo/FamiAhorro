const { Schema, model } = require("mongoose");

const eventoSchema = new Schema({
  id_integrante: { type: Number, required: true },
  fecha_evento: { type: Date, required: true },
  actividades: { type: String },
  destino: { type: String },
  descripcion: { type: String, required: true },
  dineroDestinado: { type: Number, required: true },
});

module.exports = model("Evento", eventoSchema);
