import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  _id: { type: mongoose.ObjectId, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true, max: 64 },
  author: { type: mongoose.ObjectId, required: true },
  date: { type: Date, required: true },
  paragraphs: [{
    text: { type: String, max: 4096 },
    _id: false,
    images: [{
      source: { type: String, max: 64 },
      caption: { type: String, max: 64 },
      _id: false
    }]
  }]
});

// The model 'Post' is for the 'posts' collection in the database.
const post = mongoose.model('Post', Post, 'posts');

export { post };
