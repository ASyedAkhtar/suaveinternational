import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildPath = path.join(__dirname, '../../..', 'build');

const router = express.Router();

router.get(process.env.REACT_APP_BASE_MISSING_API, async (req, res, next) => {
  res.redirect(process.env.REACT_APP_BASE_ROUTE);
});

export default router;
