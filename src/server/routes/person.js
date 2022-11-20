import express from 'express';
import dayjs from 'dayjs';

import { ObjectId } from 'mongodb';

import { person } from '../models/schemas/Person.js';

import Response from '../../constants/Response.js';
import Route from '../../constants/Route.js';

const router = express.Router();

router.get(Route.LIST, async (req, res, next) => { 
  await person.find({}, (err, persons) => {
    if(!err) {
      res.status(Response.OK).json(persons);
    } else {
      res.status(Response.INTERNALSERVERERROR).json(Response.INTERNALSERVERERROR);
    }
  }).clone();
});

router.post(Route.CREATE, async (req, res, next) => {
  // Doctor the request body to prepare insertion.
  const body = req.body;
  body.achievements = [{
    "status": "applied",
    "date": dayjs().toJSON()
  }];
  body._id = ObjectId();
  
  await person.create(body, (err) => {
    if(!err) {
      res.status(Response.OK).json(Response.OK);
    } else {
      next(err);
      res.status(Response.BADREQUEST).json(Response.BADREQUEST);
    }
  });
});

export default router;
