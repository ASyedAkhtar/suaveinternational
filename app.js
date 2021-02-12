// import express, { static } from 'express';
// import { resolve, join } from 'path';

const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const person = require('./models/schemas/Person');

const app = express();

app.use(logger);

app.get("/", (req, res) =>  {
    res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get("/api/person", async (req, res) => { 
  const applicants = await person.findAllPersons;
  res.send(applicants);
});

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}.`));

// app.use(express.static(path.join(root, 'html')));