import express from 'express';

import { post } from '../models/schemas/Post.js';

import Response from '../../constants/Response.js';
import Route from '../../constants/Route.js';

const router = express.Router();

router.get(Route.LIST, async (req, res, next) => { 
  await post.find({}, (err, posts) => {
    if(!err) {
      res.status(Response.OK).json(posts);
    } else {
      res.status(Response.INTERNALSERVERERROR).json(Response.INTERNALSERVERERROR);
    }
  }).clone();
});

router.get(Route.HOME + Route.LIST, async (req, res, next) => { 
  await post.find({ type: "Home" }, (err, posts) => {
    if(!err) {
      res.status(Response.OK).json(posts);
    } else {
      res.status(Response.INTERNALSERVERERROR).json(Response.INTERNALSERVERERROR);
    }
  }).clone();
});

export default router;
