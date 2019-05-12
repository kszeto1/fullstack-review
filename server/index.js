const express = require('express');
const db = require('../database/index.js').connection;
const request = require('request');
const bodyParser = require('body-parser');
const dbSave = require('../database/index.js').save;

// import getReposByUsername
const getReposByUsername = require('../helpers/github.js');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database


  // receive post request to /repos
  // request repos from github api and receive repos in server
  // server sends repos to database using a callback
  // when database successfully saves repos, responds with successful message to server
  // server responds to client with successful message

  // callback takes input repos to send to database
  console.log('SERVER req.body post', req.body)
  getReposByUsername(req.body.username, function(err, data) {
    if (err) {
      res.status(500).end(err);
    } else {
      dbSave(data);
    }
  });

  // callback to database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

