const chalk = require("chalk");
const getNotes = require("./notes.js");

const notes = getNotes();

console.log(notes);

const green = chalk.green.bold("test");
console.log(green);
