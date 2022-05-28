import dayjs from "dayjs";

const logger = (req, res, next) =>  {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${dayjs().format()}`);
    next();
}

export default logger;
