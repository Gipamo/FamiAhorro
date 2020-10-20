const { Schema, model } = require("mongoose");

const familiasSchema = new Schema({
  apellidos: { type: String, required: true, trim: true },
});

module.exports = model("Familias", familiasSchema);
