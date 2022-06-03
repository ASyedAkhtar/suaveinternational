import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildPath = path.join(__dirname, '../../..', 'build');

const hostNameHTTPS = process.env.REACT_APP_HOST_NAME_HTTPS;
const hostName = hostNameHTTPS.substring(0, hostNameHTTPS.indexOf(':'));

const router = express.Router();

router.get(process.env.REACT_APP_BASE_MISSING_API, async (req, res, next) => {
  res.redirect(301, `${process.env.REACT_APP_HOST_PROTOCOL}${req.hostname}:${portHTTPS}`);
});

export default router;
