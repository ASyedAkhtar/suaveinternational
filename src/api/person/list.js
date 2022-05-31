import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_HOST_PROTOCOL + process.env.REACT_APP_HOST_NAME + process.env.REACT_APP_PERSON_ROUTE + process.env.REACT_APP_PERSON_LIST_API,
  timeout: 5000
});
