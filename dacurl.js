#!/usr/bin/env node
const request = require('request');

// Parse the command line arguments
const [,,url, showBody, showErrors, getResponseCode, verbose, method = 'GET', headersJSON = '{}'] = process.argv;

// Create an options object for the request
const options = {
  url, 
  method,
  headers: JSON.parse(headersJSON)
};

// Show debug info
if (verbose=='verbose') {
console.log('Using options:', options);
}

// Make the request
request(options, function (error, response, body) {

  if (verbose=='verbose') {
   console.log('Response:', response && response.statusCode); 
  }
  //console.log('Status code:', response && response.statusCode);
  
  if (getResponseCode=='code') { 
    console.log(response && response.statusCode);
  }

  if (showBody=="body") { 
    console.log('body:', body);
  }
  if (showErrors=="error") { 
    console.error('error:', error); 
  }
  if (error) { 
    process.exit(1);
  }
});