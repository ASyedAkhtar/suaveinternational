const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const operation = require('../operations');

mongoose.connect(operation.uri, {});

const Person = new Schema({
  _id: ObjectId,
  minecraftName: String,
  discordName: String,
  socialType: String,
  socialName: String,
  ageGroup: String,
  info: String
});

const leader = mongoose.model('Person', Person, 'persons');

const findAllPersons = leader.find({}, (err, docs) => {
  if(err) throw err;
  // docs.forEach(element => {
  //   console.log(`Element: ${element}`);
  // })
});

// Person.methods.findByMinecraftName = (title, callback) => {
//   return this.find({ minecraftName: minecraftName }, callback);
// }

// const instance = new leader();
// instance.my.key = 'hello';
// instance.save((err) => {
//   console.log(err);
// });

// const findPerson = Person.methods.findByMinecraftName({}, (err, docs) => {
//     if(err) throw err;
//     console.log(docs);
//   docs.forEach(element => {
//       console.log(`Element: ${element}`);
//       docs.toJSON();
//   });
// });

module.exports = {  findAllPersons };
