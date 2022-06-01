import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import http from 'http';
import https from 'https';
import dayjs from 'dayjs';
// import React from 'react';
// import reactDomServer from 'react-dom/server';

import logger from './middleware/logger.js';
import person from './routes/person.js';
import base from './routes/base.js';
import operation from './models/operation.js';

// import App from '../App.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildPath = path.join(__dirname, '../..', 'build');

const hostNameHTTP = process.env.REACT_APP_HOST_NAME_HTTP;
const portHTTP = hostNameHTTP.substring(hostNameHTTP.indexOf(':') + 1);
const hostNameHTTPS = process.env.REACT_APP_HOST_NAME_HTTPS;
const hostName = hostNameHTTPS.substring(0, hostNameHTTPS.indexOf(':'));
const portHTTPS = hostNameHTTPS.substring(hostNameHTTPS.indexOf(':') + 1);

const app = express();

// Initialize middleware.
app.enable('trust proxy');
app.use(logger);
app.use(express.json());
app.use(express.static(buildPath));
app.use((req, res, next) => {
  if(req.hostname.includes(hostName)) {
    if(!req.secure) {
      res.redirect(301, `${process.env.REACT_APP_HOST_PROTOCOL}${req.hostname}${req.url}`);
    }
  } else {
    res.status(403).end(`<h1>Access with ${req.hostname} is restricted!</h1>`);
  }
  next();
});

// Initialize routes.
app.use(process.env.REACT_APP_PERSON_ROUTE, person);
app.use(process.env.REACT_APP_BASE_ROUTE, base);

// Initialize models.
operation.connect();

http.createServer(app).listen(portHTTP, () => console.log(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] Server started on port ${portHTTP}.`));

https.createServer({
  key: fs.readFileSync(path.join(__dirname, './ssl/suaveinternational.com.key')),
  ca: fs.readFileSync(path.join(__dirname, './ssl/origin_ca_rsa_root.pem')),
  cert: fs.readFileSync(path.join(__dirname, './ssl/suaveinternational.com.pem'))
}, app).listen(portHTTPS, () => console.log(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] Server started on port ${portHTTPS}.`));

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
