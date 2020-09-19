const { Schema, model } = require("mongoose");

const dineroFamiliaSchema = new Schema({
  id_familia: { type: Number, required: true },
  monto: { type: Number, required: true },
});

module.exports = model("DineroFamilia", dineroFamiliaSchema);
