import dayjs from 'dayjs';

const logger = (req, res, next) =>  {
  console.log(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}]
  Request Resource: ${req.protocol}://${req.get('host')}${req.originalUrl}
  Request Origin: ${(req.header('x-forwarded-for') || req.socket.remoteAddress)}
  Request Headers: ${JSON.stringify(req.headers)}\n`);
  next();
}

export default logger;
