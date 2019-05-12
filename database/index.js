const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true,
});

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('openUri()', function() {

// });

let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
  name: String,
  username: String,
  stargazers_count: Number,
  fork_count: Number,
  html_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let newDocument = new Repo({
    name: repo.name,
    username: repo.username,
    stargazers_count: repo.stargazers_count,
    fork_count: repo.fork_count,
    html_url: repo.html_url
  })

  newDocument.save(function(err) {
    if (err) {
      console.log('failed to save');
    } else {
      console.log('successfully saved');
    }
  })
}

// find top 25 collections from database
// export that function

let findAll = (cb) => {
  Repo.find(function (err, docs) {
    if (err) {
      cb(err);
    } else {
      cb(null, docs);
    }
  })
}

module.exports.save = save;
module.exports.findAll = findAll;












// we're connected!
//   console.log('we are connected');
//   var kittySchema = new mongoose.Schema({
//     name: String
//   });
  
  
//   kittySchema.methods.speak = function () {
//     var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//     console.log(greeting);
//   }
  
//   var Kitten = mongoose.model('Kitten', kittySchema);
//   var silence = new Kitten({ name: 'Silence' });
//   console.log(silence.name);

//   var fluffy = new Kitten({ name: 'fluffy' });
//   fluffy.speak();

//   fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.speak();
//   });