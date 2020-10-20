const integranteCtrl = {};
const Integrantes = require("../models/Integrantes");

integranteCtrl.getIntegrantes = async (req, res) => {
  try {
    const integrantes = await Integrantes.find();
    res.json(integrantes);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

integranteCtrl.getIntegrante = async (req, res) => {
  const {idIntegrante} = req.params;
  try {
    const integrante = await Integrantes.findById({id:idIntegrante});
    res.json(integrante);
  } catch (err) {
    res.status(404).json({
      error: 'Integrante was not found'
    })
  }
};

integranteCtrl.createIntegrante = async (req, res) => {
  if (process.session.rolUsuario === "ADMIN") {
    try {
      const { id_familia } = await Integrantes.findOne({
        id: process.session.idIntegrante,
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
    } catch (err) {
      res.json(err.errmsg);
    }
  } else {
    res.status(403).json("You can not create an Integrante");
  }
};

integranteCtrl.updateIntegrante = async (req,res) => {
  const {id} = req.params;
  const { cedula, nombre, email, direccion, telefono } = req.body;
  try {
    await Integrantes.updateOne({id:id},{
      cedula, nombre, email, direccion, telefono
    })
  } catch (err) {
    res.json(err.errmsg)
  }
}

integranteCtrl.deleteIntegrante = async (req, res) => {
  const { id } = req.params;
  try{
    await Integrantes.findByIdAndDelete(id);
    res.json("Integrante was deleted successfully");
  }catch(err){
    res.json(err.errmsg)
  }
};

module.exports = integranteCtrl;
