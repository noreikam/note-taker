const fs = require('fs');
const uniqid = require('uniqid');
const path = require('path');

function createNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );

  return note;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  return true;
}

function deleteNote(id, notesArray) {
  // pop note from notesArray, json.stringify notes: notesArray
}

module.exports = { createNote, validateNote, deleteNote }