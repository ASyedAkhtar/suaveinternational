import mongoose from 'mongoose';

import operation from '../operation.js';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect(operation.uri, {});

const Person = new Schema({
  _id: { type: ObjectId, required: true },
  minecraftName: { type: String, required: true, max: 64 },
  discordName: { type: String, required: true, max: 64 },
  socialType: { type: String, required: true, max: 64 },
  socialName: { type: String, required: true, max: 64 },
  ageGroup: { type: String, required: true, max: 64 },
  info: { type: String, max: 256 },
  achievements: [{
    status: { type: String },
    date: { type: Date }
  }]
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

export default { findAllPersons };
