import express from 'express';

import person from '../models/schemas/Person.js';

const router = express.Router();

router.get(process.env.REACT_APP_PERSONLIST_API, async (req, res, next) => { 
  const persons = await person.list.clone().catch(function(err) { console.log(err) });
  res.send(persons);
});

router.post(process.env.REACT_APP_PERSONCREATE_API, async (req, res, next) => {
  res.send(process.env.RESPONSE_OK);
  await person.create(req.body);
});

export default router;
