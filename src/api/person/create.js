import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + process.env.REACT_APP_PERSON_ROUTE + process.env.REACT_APP_PERSONCREATE_API,
  // headers: {"Content-Type": "application/json"},
  timeout: 5000
});
