// import express, { static } from 'express';
// import { resolve, join } from 'path';

const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
// const operation = require('./models/operations')
const person = require('./models/schemas/person');

const app = express();

app.use(logger);

app.get("/", (req, res) =>  {
    res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get("/api/person", async (req, res) => { 
  const aaa = await person.findAllPersons;
  res.send(aaa);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// app.use(express.static(path.join(root, 'html')));z