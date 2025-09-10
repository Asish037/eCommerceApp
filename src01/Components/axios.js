//import axios from 'axios';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ecom.kussoft.net/api/',
});

export default instance;
