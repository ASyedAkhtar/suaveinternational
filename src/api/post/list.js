import axios from 'axios';

import Route from '../../constants/Route.js';

export default axios.create({
  baseURL: process.env.REACT_APP_HOST_PROTOCOL + process.env.REACT_APP_HOST_NAME_HTTPS + Route.POST + Route.LIST,
  timeout: 5000
});
