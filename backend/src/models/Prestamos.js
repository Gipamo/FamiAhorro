const { Schema, model } = require("mongoose");

const prestamosSchema = new Schema({
  id_integrante: { type: Schema.Types.ObjectID, required: true },
  cantidad: { type: Number, required: true },
  descripcion: { type: String, trim: true },
  fecha_prestamo: { type: Date, required: true },
  fecha_pago: Date,
  fuePagado: {type:Boolean,required=true}
});

module.exports = model("Prestamos", prestamosSchema);
