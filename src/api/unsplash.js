/* this will contain all code relating to getting
  data from unsplash
*/
import axios from 'axios';
import config from '../config';

const accessKey = config.access_key;
const secret_key = config.secret_key;
// will create an instance of axios Client
// with some defaulted properties
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
    'Client-ID ' + accessKey
  }
});
