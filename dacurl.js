#!/usr/bin/env node
const request = require('request');

//console.log(process.argv[2])
request(process.argv[2],  function (error, response, body) {
  console.log( response && response.statusCode); // Print the response status code if a response was received
  if (process.argv[3] && process.argv[3] == "body" ) { console.log('body:', body); }// Print the HTML for the Google homepage.
  if (process.argv[4] && process.argv[4] == "error" ) { console.error('error:', error); } // Print the error if one occurred
  if (error) { process.exit(1);  }
});
