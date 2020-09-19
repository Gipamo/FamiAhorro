const bcrypt = require("bcrypt");
const Usuario = require("../models/Integrante");

const loginCtrl = {};

loginCtrl.getUser = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ email: body.params.email });
    if (!usuario) {
      return res.status(400).json({
        err: {
          message: "Usuario incorrecto",
        },
      });
    }
    if (!bcrypt.compareSync(body.params.password, usuario.password)) {
      return res.status(400).json({
        err: {
          message: "Contraseña incorrecta",
        },
      });
    }
    req.session.idIntegrante = usuario._id;
    req.session.rolUsuario = usuario.rol;
    res.json({
      user: usuario,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
module.exports = loginCtrl;
