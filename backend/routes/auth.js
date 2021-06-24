const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Role = require("../models/role");

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Incorrect email or password");

  const hash = await bcrypt.compare(req.body.password, user.password);
  if (!user.active || !hash)
    return res.status(400).send("Incorrect email or password");

  try {
    const jwtToken = user.generateJWT();

    const { name } = await Role.findById( user.roleId);

   const role =  ( name == "admin") ? true : false;
  
    return res.status(200).send({ jwtToken, role});
  } catch (e) {
    return res.status(400).send("Login error");
  }
});

router.put('/admin', async (req, res) => {
  
})

module.exports = router;
