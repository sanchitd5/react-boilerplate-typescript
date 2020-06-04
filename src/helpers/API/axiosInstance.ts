import axios from 'axios';

const baseURL: string = process.env.REACT_APP_BASE_URL + '/api/';

const axiosInstance = axios.create({
    baseURL: baseURL,
});

export default axiosInstance;