/*

// fs - to access file system
// this is how it works with node - need to store in a var
const fs = require("fs");

// writeFileSync() - 2 args - name of file and contents of file
// need to require - aka import the fs module
fs.writeFileSync("notes.txt", "this file was created byddawsdas"); // this rewrites

// CHALLENGE
// APPEND SOME TEXT TO notes.txt
// use appendFileSync method from fs module

fs.appendFileSync("notes.txt", "\n more DATA ");
*/

/*
global install node module: 

npm install nodemon -g 

  - g flag for global

  - don't need require anymore 
  - won't appear in package.json 

  - nodemon is a file monitoring tool - use in terminal

*/

/*

// VID 2

// when require() runs it runs the module it imports
// const my_utils = require("./utils.js");
// require("./utils.js");
// const name = require("./utils.js");
const add = require("./utils.js");
const getNotes = require("./notes.js");

const sum = add(4, -2);

console.log(sum);
console.log(getNotes());

// once we do npm init and npm install the package we want we need require to import it
const validator = require("validator");

console.log(validator.isEmail("djslkad.cas2djalksd.net"));
console.log(validator.isURL("https://mead.io"));

// challenge chalk
const chalk = require("./challenge_chalk");
console.log(chalk.redBright.bold("CACA"));

*/

// ABOUT ARGS - COMMAND LINE
// argv is an array argv[0] - path to node js on machine
// argv[1] - path to this file
// argv[2....]  - our args we provide

// const comm = process.argv[2];

// if (comm === "add") {
//   console.log("adding note");
// } else if (comm === "remove") {
//   console.log("removing note baby");
// }

// npm package to parse argv strings - npm install yargs
const yargs = require("yargs");
const notes = require("./notes");

// customize yargs version
yargs.version("1.5.0"); // for cmd line tool part

// add, remove, read, list

// create add command - arg is an obj
// probably more info and examples on npmjs.com - yargs
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Text of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    // console.log("Adding a new note!", argv);
    notes.addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// challenge - list and read commands
yargs.command({
  command: "list",
  describe: "Show all notes",
  handler: () => {
    notes.listNotes();
    // console.log("aca");
  },
});

// read a note command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

// console.log(process.argv);
// console.log(yargs.argv); // parsed process.argv
// { _: [ 'caca', 2, 123 ], title: 'pipi', v: true, '$0': 'app.js' }
// console.log(yargs.argv.$0);

// don't know why but for yargs cmd line command to work there has to a console log
// and it has to be at the end of the code
// FIX - yargs.parse()
yargs.parse();
