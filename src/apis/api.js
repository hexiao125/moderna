import axios from 'axios';

export default axios.create({
    baseURL: 'http://modernacodechallenge.azurewebsites.net/api'
});