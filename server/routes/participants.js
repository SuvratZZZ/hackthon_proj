const express = require("express");
const Participant = require("../models/Participant");
const { authMiddleware } = require("../middleware/auth");
const router = express.Router();

// Enroll a new participant
router.post("/enroll", authMiddleware, async (req, res) => {
  try {
    const participant = new Participant(req.body);
    await participant.save();
    res.status(201).json(participant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all participants
router.get("/", authMiddleware , async (req, res) => {
  const participants = await Participant.find();
  res.json(participants);
});

module.exports = router;
