import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const Person = new mongoose.Schema({
  _id: { type: mongoose.ObjectId, required: true },
  minecraftName: { type: String, required: true, max: 64 },
  discordName: { type: String, required: true, max: 64 },
  socialType: { type: String, required: true, max: 64 },
  socialName: { type: String, required: true, max: 64 },
  ageGroup: { type: String, required: true, max: 64 },
  info: { type: String, max: 256 },
  achievements: [{
    status: { type: String },
    date: { type: Date },
    _id: false
  }]
});

// The model 'Person' is for the 'persons' collection in the database.
const person = mongoose.model('Person', Person, 'persons');

const list = person.find({}, (err, res) => {
    if(err) throw err;
});

const create = (data) => {
  // Doctor the JSON to prepare insertion.
  data.achievements = [{
    "status": "applied",
    "date": dayjs().toJSON()
  }];
  data._id = ObjectId();

  person.create(data, (err) => {
    if(err) throw err;
  });
};

export default { list, create };

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
