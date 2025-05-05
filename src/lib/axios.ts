import axios from "axios";

// Axios Interceptor Instance
const AxiosApp = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL + '/api',
    withCredentials: true
});

AxiosApp.interceptors.request.use(
    (config) => {
        // if (typeof window !== "undefined") {
        //     // const token = localStorage?.getItem('token') as string;
        //     // const accessToken = JSON.parse(token);
        //     // if (accessToken) {
        //         if (config.headers) config.headers.Authorization = 'Bearer ';
        //     // }
        //     return config;
        // }
        return config
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

// Axios Interceptor: Response Method
AxiosApp.interceptors.response.use(
    (response) => {
        // Can be modified response
        console.log(response.status);
        
        return response;
    },
    (error) => {
        // Handle response errors here
        return Promise.reject(error);
    }
);


export default AxiosApp