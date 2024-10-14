import axios from 'axios';

// Create an Axios instance with default configuration
const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/query',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Optional: Add an interceptor to handle errors globally
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle error response here if needed
        return Promise.reject(error);
    }
);

export default axiosClient;
