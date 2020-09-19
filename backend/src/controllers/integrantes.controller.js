const integranteCtrl = {};

const Integrante = require("../models/Integrante");
const Familia = require("../models/Familia");

userCtrl.getIntegrantes = async (req, res) => {
  try {
    const integrantes = await Integrante.find();
    res.json(integrantes);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

userCtrl.createIntegrante = async (req, res) => {
  if (process.session.rolUsuario === "ADMIN") {
    try {
      const { id_familia } = await Integrante.findOne({
        _id: process.session.idIntegrante,
      });
      const { cedula, nombre, email, direccion, telefono } = req.body;

      const newUser = new User({
        cedula,
        nombre,
        id_familia,
        email,
        contrasena: cedula,
        direccion,
        telefono,
        rol,
      });
      await newUser.save();
      res.json("Integrante created successfully");
    } catch (e) {
      console.log(e);
      res.json(e.errmsg);
    }
  } else {
    res.json("You can not create an Integrante");
  }
};

userCtrl.deleteIntegrante = async (req, res) => {
  const { id } = req.params;
  await Integrante.findByIdAndDelete(id);
  res.json("Integrante was deleted successfully");
};

module.exports = userCtrl;
