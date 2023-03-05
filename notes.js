const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Catatan ini diambil dari notes.js";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log("New Note added!");
  } else {
    console.log("Note title taken!");
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No Note Found"));
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
};
