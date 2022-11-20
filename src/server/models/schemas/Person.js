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

export { person };
