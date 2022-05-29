import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + process.env.REACT_APP_PERSON_ROUTE + process.env.REACT_APP_PERSONLIST_API,
  timeout: 5000
});
