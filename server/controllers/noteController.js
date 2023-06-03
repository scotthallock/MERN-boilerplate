const Note = require('../models/NoteModel');

const noteController = {};

noteController.createNote = async (req, res, next) => {
  try {
    const { content } = req.body;
    if (!content) throw new Error('Missing content in request body');
    res.locals.note = await Note.create({ content });
    return next();
  } catch (err) {
    next(err);
  }
};

noteController.getNotes = async (req, res, next) => {
  try {
    res.locals.notes = await Note.find({});
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = noteController;
