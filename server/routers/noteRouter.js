const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Create a new note
router.post('/', noteController.createNote, (req, res) => {
  res.status(201).json(res.locals.note);
});

// Get all notes
router.get('/', noteController.getNotes, (req, res) => {
  res.json(res.locals.notes);
});

module.exports = router;
