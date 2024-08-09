import axios from 'axios';


const calendarAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// TODO: interceptores

calendarAPI.interceptors.request.use( config => {

    config.heders(
        ...config.headers,
        'x-token', localStorage.getItem('token')
    );


    return config;
})



export default calendarAPI;