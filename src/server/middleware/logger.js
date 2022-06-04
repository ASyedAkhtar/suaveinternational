import dayjs from 'dayjs';

const logger = (req, res, next) =>  {
    console.log(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] Request made to ${req.protocol}://${req.get('host')}${req.originalUrl}
    Request Secure: ${req.secure}\nRequest Headers: ${JSON.stringify(req.headers)}\n`);
    next();
}

export default logger;
