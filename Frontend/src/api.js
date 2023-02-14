import axios from "axios";
const BASE_URL="http://localhost:8080"
export const signupApi=(creds)=>{
    return axios.post(`${BASE_URL}/auth/signup`,creds);
}
export const loginApi=(creds)=>{
    return axios.post(`${BASE_URL}/auth/login`,creds);
}