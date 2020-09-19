const logoutCtrl = {};

logoutCtrl.closeSession = () => {
  req.session.destroy();
  res.json({ message: "Session closed successfully" });
};
module.exports = logoutCtrl;
