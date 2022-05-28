import express from 'express';

import person from '../models/schemas/Person.js';

const router = express.Router();

router.get(process.env.REACT_APP_GETALLPERSONS_API, async (req, res, next) => { 
  const persons = await person.findAllPersons.clone().catch(function(err) { console.log(err) });
  res.send(persons);
});

router.post(process.env.REACT_APP_POSTPERSON_API, async (req, res, next) => {
  res.send(process.env.RESPONSE_OK);
});

export default router;
