const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("title: " + argv.title);
    console.log("body: " + argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a Note",
  handler: function () {
    console.log("removing the note");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List Notes",
  handler: function () {
    console.log("List Notes");
  },
});

// Create Read command
yargs.command({
  command: "read",
  describe: "Read a Note",
  handler: function () {
    console.log("Read a Note");
  },
});

console.log(yargs.argv);
