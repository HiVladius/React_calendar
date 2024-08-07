import axios from 'axios';


const calendarAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// TODO: interceptores 




export default calendarAPI;