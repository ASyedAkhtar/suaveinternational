import dayjs from 'dayjs';

const logger = (req, res, next) =>  {
    console.log(`Request made to ${req.protocol}://${req.get('host')}${req.originalUrl} at ${dayjs().format()}.`);
    next();
}

export default logger;
