import axios from 'axios';

const api = axios.create({
    baseURL: "https://dropbox-banckend.herokuapp.com"
});

export default api;