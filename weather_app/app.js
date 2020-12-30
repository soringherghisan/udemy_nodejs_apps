// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
// 5dbbb50fcac2832628a4324d45958c39
// bucharest id = 683506  ?

// npm module to make requests more easily - npm install request

const request = require("request");

const url =
  "http://api.openweathermap.org/data/2.5/forecast?id=683506&appid=5dbbb50fcac2832628a4324d45958c39";

// request first arg - url ; second - callback for what to do with data
request(
  {
    url: url,
    json: true, // auto parses json response.body
  },
  (error, response, body) => {
    // console.log(body);
    console.log(body.list[0].main);
    console.log(body.list[0].weather);
    console.log(body.list[0].clouds);
    console.log(body.list[0].wind);
    console.log(body.list[0].sys);
  }
);

// geocoding api
// turn address into lat/long and get weather from first api - doesn't work with what i'm using
// whatever
// mapbox.com - location based services

// dealing with errors - response is undefined ; error contains something
// request(
//   {
//     url: url,
//     json: true, // auto parses json response.body
//   },
//   (error, response, body) => {
//     if (error) {
//       console.log("unable to connect to weather service");
//     } else {
//       console.log(body);
//     }
//   }
// );

//*************************************** */ left off at video 9 or 10
