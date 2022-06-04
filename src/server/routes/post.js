import express from 'express';

import post from '../models/schemas/Post.js';

const router = express.Router();

router.get(process.env.REACT_APP_LIST_API, async (req, res, next) => { 
  const posts = await post.list.clone();
  res.send(posts);
});

export default router;
