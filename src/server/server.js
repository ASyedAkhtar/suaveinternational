import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import http from 'http';
import https from 'https';
import dayjs from 'dayjs';

import logger from './middleware/logger.js';

import person from './routes/person.js';
import post from './routes/post.js';
import base from './routes/base.js';

import operation from './models/operation.js';

import Response from '../constants/Response.js';
import Route from '../constants/Route.js';

const app = express();

// Initialize middleware.
app.set('trust proxy', process.env.EXPRESS_TRUSTPROXY === 'true');

const hostHTTPS = process.env.REACT_APP_HOST_NAME_HTTPS;
const hostName = hostHTTPS.substring(0, hostHTTPS.indexOf(':'));
const portHTTPS = hostHTTPS.substring(hostHTTPS.indexOf(':') + 1);

app.use(logger);
app.use(express.json());
app.use((req, res, next) => {
  if(req.hostname === hostName && req.secure) {
    next();
  } else if(req.hostname.includes(hostName)) {
    res.redirect(Response.MOVEDPERMANENTLY, `${process.env.REACT_APP_HOST_PROTOCOL}${hostName}:${portHTTPS}${req.url}`);
  } else {
    res.status(Response.FORBIDDEN).end();
  }
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildPath = path.join(__dirname, '../..', 'build');
const publicPath = path.join(__dirname, '../..', 'public');

app.use(express.static(buildPath));
app.use(express.static(publicPath/*, {dotfiles: 'allow'}*/));

// Initialize routes.
app.use(Route.PERSON, person);
app.use(Route.POST, post);
app.use(Route.BASE, base);

// Initialize models.
operation.connect();

const hostHTTP = process.env.REACT_APP_HOST_NAME_HTTP;
const portHTTP = hostHTTP.substring(hostHTTP.indexOf(':') + 1);

http.createServer(app).listen(portHTTP, () => console.log(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] HTTP server started on port ${portHTTP}.`));

https.createServer({
  key: fs.readFileSync(process.env.SSL_KEY),
  ca: fs.readFileSync(process.env.SSL_CA),
  cert: fs.readFileSync(process.env.SSL_CERT)
}, app).listen(portHTTPS, () => console.log(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] HTTPS server started on port ${portHTTPS}.`));
