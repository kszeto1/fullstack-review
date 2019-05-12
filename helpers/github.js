const request = require('request');
const config = require('../config.js');


var jsonData;
let getReposByUsername = (username, cb) => {
//   // TODO - Use the request module to request repos for a specific
//   // user from the github API

//   // The options object has been provided to help you out, 
//   // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  
  // function callback(error, response, body) {
  //   if (error) {
  //     response.status(500).send();
  //   } else {
  //     response.status(200).send(body);
  //   }
    
  // }
  request(options, cb)
};

console.log(jsonData)
console.log(getReposByUsername('kszeto1'));

module.exports = getReposByUsername;