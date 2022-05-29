import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_HOST_URL + process.env.REACT_APP_PERSON_ROUTE + process.env.REACT_APP_PERSON_CREATE_API,
  // headers: {"Content-Type": "application/json"},
  timeout: 5000
});
