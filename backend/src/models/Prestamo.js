const { Schema, model } = require("mongoose");

const prestamoSchema = new Schema({
  id_integrante: { type: Number, required: true },
  cantidad: { type: Number, required: true },
  descripcion: { type: String, trim: true },
  fecha_prestamo: { type: Date, required: true },
  fecha_pago: Date,
  fuePagado: Boolean,
});

module.exports = model("Prestamo", prestamoSchema);
