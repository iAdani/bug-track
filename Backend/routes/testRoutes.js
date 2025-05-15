const express = require('express');
const router = express.Router();
const Test = require('../models/Test');

// POST: Create a test document
router.post('/', async (req, res) => {
  try {
    const test = new Test({ name: 'Snoop' });
    await test.save();
    res.status(201).json({ success: true, data: test });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET: Fetch all test documents
router.get('/', async (req, res) => {
  try {
    const tests = await Test.find();
    res.status(200).json({ success: true, data: tests });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
