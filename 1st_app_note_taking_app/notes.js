// Challeges
// 1 create a new file notes.js
// 2. create a listNotes func that returns "your notes"
// 3. export listNotes
// 4. import in app.js and call it

const fs = require("fs");
const chalk = require("./challenge_chalk");

// list notes
const listNotes = () => {
  // load notes
  notes = loadNotes();

  // debugger;

  if (notes.length > 0) {
    // display
    console.log(chalk.greenBright(`You have ${notes.length} notes`));
    console.log(chalk.green("Here are their titles in no particular order:"));
    notes.forEach((element) => {
      console.log(element.title);
    });
  } else {
    console.log("you have no notes");
  }
};

// add note
const addNote = (title, body) => {
  // first - load in existing notes - stored as a json file
  const notes = loadNotes();

  // check if title already exists - if so don't allow
  const duplicateNotes = notes.filter((note) => {
    if (note.title === title) {
      return true;
    } else {
      // else not needed here - false is implied
      return false;
    }
  });

  // add new note to array of existing notes
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    // save note to notes
    saveNotes(notes);
    console.log(chalk.bgGreenBright("New note added"));
  } else {
    console.log(
      chalk.redBright("Note title already used - try something else ")
    );
  }
};

const saveNotes = (notes) => {
  // strygify and save to file system
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// remove note
const removeNote = (title) => {
  // load notes
  const notes = loadNotes();

  // check and delete
  const new_notes = notes.filter((note) => {
    if (note.title !== title) {
      return true;
    } else {
      // is else needed here? don't think so.
      return false;
    }
  });

  // save notes
  if (new_notes.length !== notes.length) {
    saveNotes(new_notes);
    console.log(chalk.bgGreenBright("note delete"));
  } else {
    console.log(chalk.bgRedBright("note with that title wasn't found"));
  }
};

// read specific note
const readNote = (title) => {
  // load notes
  const notes = loadNotes();

  // check if title is in notes - if so return note - note body else return error
  my_note = notes.find((note) => note.title === title);

  if (my_note) {
    console.log(my_note.title);
    console.log(my_note.body);
  } else {
    console.log(chalk.red("NO SUCH NOTE"));
  }
};

// module.exports = listNotes;
module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
};

// can be more efficient with array.find instead of array.filter in the remove and add note commands
// .find() runs a func for each elem in array until a match is found

/*

about debugging 
  - have to write - literally - debugger on a certain line to start it from there

  - have to run with a special option - inspect
    - node inspect app.js 

    - and then we need chrome to debug with a browser
      - chrome://inspect/#devices
      - this is because chrome and node both use v8 

  - more info and example in video
    - basically the code is copied from this file to the browser and we use the 
      debugger there
 */
