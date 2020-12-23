console.log("utils.js");

const name = "ME";

const add = function (a, b) {
  return a + b;
};

// in order to use vars in this file in another file we have to export them
// explicitely

// whatever we assing module.exports to is what is available when require() is run
// in another file

// module.exports = name;
module.exports = add;
