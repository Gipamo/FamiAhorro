const logoutCtrl = {};

logoutCtrl.closeSession = (req,res) => {
  req.session.destroy();
  res.json({ message: "Session closed successfully" });
};
module.exports = logoutCtrl;
