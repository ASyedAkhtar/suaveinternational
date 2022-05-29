import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import React from 'react';
import reactDomServer from 'react-dom/server';

// import App from '../App.js';
import logger from './middleware/logger.js';

import person from './routes/person.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildPath = path.join(__dirname, '../..', 'build');

const app = express();

app.use(logger);
app.use(express.json());
app.use(express.static(buildPath));
app.use(process.env.REACT_APP_PERSON_ROUTE, person);

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}.`));

// router.get('/', async (req, res, next) => {
//   res.sendFile(path.join(buildPath, 'index.html'));
// });

// app.get(REACT_APP_HOME_URL, (req, res) => {
//   fs.readFile(path.resolve(buildPath, 'index.html'), 'utf8', (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send('Internal Server Error!');
//     }

//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         // `<div id="root">${reactDomServer.renderToString(<App />)}</div>`
//         `<div id="root">${reactDomServer.renderToString(react.createElement(App, null))}</div>`
//       )
//     );
//   });
// });

// app.use(
//   express.static(path.resolve(__dirname, '.', 'dist'), { maxAge: '30d' })
// );

// app.use(express.static(path.join(__dirname, '../..', 'public')));

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "../..", "build", "index.html"));
// });
