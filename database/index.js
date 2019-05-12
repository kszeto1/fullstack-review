const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

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
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log(repo);
  // let newDocument = new Repo({
  //   name: repo.
  // })
}

module.exports.save = save;












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