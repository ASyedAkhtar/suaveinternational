import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

// const fs = require('fs');
// const path = require('path');

// const express = require('express');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');

// const App = require('../App.js');
// const logger = require('./middleware/logger.js');
// const person = require('./models/schemas/Person.js');

import App from '../App.js';
import logger from './middleware/logger.js';
import person from './models/schemas/Person.js';

const app = express();

app.use(logger);

app.use(express.static(path.join(__dirname, '../..', 'build')));
app.use(express.static(path.join(__dirname, '../..', 'public')));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../..", "build", "index.html"))
});

app.use(
  express.static(path.resolve(__dirname, '.', 'dist'), { maxAge: '30d' })
);

app.get("/", (req, res) => {
  fs.readFile(path.resolve('../../public/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Internal Server Error!');
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

app.get(process.env.REACT_APP_MISSING_URL, function (req, res) {
  res.sendFile(path.join(__dirname, '../..', 'public', 'index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get(process.env.REACT_APP_PERSONS_API, async (req, res) => { 
  const persons = await person.findAllPersons.clone().catch(function(err){ console.log(err)});
  res.send(persons);
});

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}.`));
