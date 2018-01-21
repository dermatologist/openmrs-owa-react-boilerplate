import axios from "axios";

export const openmrsServer = axios.create({
    //baseURL: "http://localhost:8080",
    credentials: 'same-origin',
    headers: {
        "Content-Type": "application/json"
    }
});