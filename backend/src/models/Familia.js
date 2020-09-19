const { Schema, model } = require("mongoose");

const familiaSchema = new Schema({
  id_admin: { type: Number, required: true },
  id_dinerofamilia: { type: Number, required: true },
  apellidos: { type: String, required: true, trim: true },
});

module.exports = model("Familia", familiaSchema);
