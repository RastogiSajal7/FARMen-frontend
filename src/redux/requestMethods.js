import axios from 'axios';

const BASE_URL = "https://farmen-backend.onrender.com/api";

export const publicRequest = axios.create({
    baseURl: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,

});