import axios from "axios"

const api = axios.create({
    baseURL: "https://api-agro-decide.vercel.app/api"
});

export default api;
