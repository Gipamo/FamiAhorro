const { Schema, model } = require("mongoose");

const eventosSchema = new Schema({
  id_integrante: { type: Schema.Types.ObjectID, required: true },
  fecha_evento: { type: Date, required: true },
  actividades: { type: String },
  destino: { type: String },
  descripcion: { type: String, required: true },
  dineroDestinado: { type: Number, required: true },
});

module.exports = model("Eventos", eventosSchema);
