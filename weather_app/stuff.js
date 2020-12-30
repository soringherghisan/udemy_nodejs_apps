/*************** about call stack and event loop, node api queue, callback queue

console.log("starting");

// in between
// setTimeout() -> async func provided by node -> run a func after a certain amount of time has passed
setTimeout(() => {
  console.log("from timeout baby");
}, 3000);
setTimeout(() => {
  console.log("0 second timeout baby");
}, 0);

console.log("end of code baby ");

*/

// ********************************************* about callbacks
// callback pattern
// we're using setTimeout to simulate an async func
const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      lat: 123,
      long: 321,
    };

    callback(data);
  }, 2000);
};

geocode("Philly", (data) => {
  console.log(data);
});

// callback pattern challenge
// 1. def add func that accepts the correct args; 2. use setTimeout to simulate a 2sec
// delay ; 3. after 2 secs, call the callback function with the sum
const add = (a, b, callback) => {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
