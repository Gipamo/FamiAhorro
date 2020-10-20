const bcrypt = require("bcrypt");
const Integrantes = require("../models/Integrantes");

const loginCtrl = {};

loginCtrl.getUser = async (req, res) => {
  try {
    const usuario = await Integrantes.findOne({ email: req.params.email });
    if (!usuario) {
      return res.status(400).json({
        err: {
          message: "User is incorrect",
        },
      });
    }
    if (!bcrypt.compareSync(body.params.password, usuario.contrasena)) {
      return res.status(400).json({
        err: {
          message: "Password is incorrect",
        },
      });
    }
    req.session.idIntegrante = usuario.id;
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
