import express from 'express';

import person from '../models/schemas/Person.js';

const router = express.Router();

router.get(process.env.REACT_APP_PERSON_LIST_API, async (req, res, next) => { 
  const persons = await person.list.clone();
  res.send(persons);
});

router.post(process.env.REACT_APP_PERSON_CREATE_API, async (req, res, next) => {
  res.send(process.env.RESPONSE_OK);
  await person.create(req.body);
});

export default router;
