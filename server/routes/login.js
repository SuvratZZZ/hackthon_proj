const express = require("express");
const participant = require("../models/participants");
const {authMiddleware} = require("../middleware/auth");
const loginRouter = express.Router();
const { sign } = require("jsonwebtoken")

loginRouter.post("/" , async (req, res) => {
  try {
    const data = req.body;
    const user = participant.findone({
        email : data.email,
        password : data.password
    })
    const role = user.role;
    const token = sign(user,process.env.SECRET_KEY);
    res.status(201).json({token , role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = loginRouter;
