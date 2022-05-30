const { createNote, validateNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const router = require('express').Router();
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
  res.json(notes);
})

router.post('/notes', (req, res) => {
  req.body.id = uniqid();

  if (!validateNote(req.body)) {
    res.status(400).send('Note not formatted properly');
  } else {
    const note = createNote(req.body, notes);
    res.json(note);
  }
});

router.delete('/notes', (req, res) => {
  // if note exists, call deleteNote, else, return 'no note with this id'
})

module.exports = router;