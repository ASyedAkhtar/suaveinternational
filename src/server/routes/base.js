import express from 'express';

import Response from '../../constants/Response.js';
import Route from '../../constants/Route.js';

const hostNameHTTPS = process.env.REACT_APP_HOST_NAME_HTTPS;
const hostName = hostNameHTTPS.substring(0, hostNameHTTPS.indexOf(':'));
const portHTTPS = hostNameHTTPS.substring(hostNameHTTPS.indexOf(':') + 1);

const router = express.Router();

router.get(Route.MISSING, async (req, res, next) => {
  res.redirect(Response.MOVEDPERMANENTLY, `${process.env.REACT_APP_HOST_PROTOCOL}${hostName}:${portHTTPS}`);
});

export default router;
