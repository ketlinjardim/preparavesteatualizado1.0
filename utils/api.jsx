import axios from 'axios';

const apiConfig = axios.create({
    baseURL: 'http://192.168.1.12:3000',
});

export default apiConfig;