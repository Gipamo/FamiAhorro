const { Schema, model } = require("mongoose");
let rolesValidos = {
  values: ["ADMIN", "USER", "SYSADMIN"],
  message: "{VALUE} no es un rol válido",
};
const integrantesSchema = new Schema({
  cedula: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  id_familia: { type: Schema.Types.ObjectID, required: true },
  email: { type: String, required: true },
  contrasena: { type: String, required: true },
  direccion: String,
  telefono: { type: String, required: true },
  rol: {
    type: String,
    default: "USER",
    required: true,
    enum: rolesValidos,
  },
});
integrantesSchema.methods.toJSON = function () {
  let integrante = this;
  let integranteObject = integrante.toObject();
  delete integranteObject.password;
  return integranteObject;
};
module.exports = model("Integrantes", integrantesSchema);
