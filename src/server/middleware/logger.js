import dayjs from 'dayjs';

const logger = (req, res, next) =>  {
    console.log(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] Request made to ${req.protocol}://${req.get('host')}${req.originalUrl}.`);
    next();
}

export default logger;
