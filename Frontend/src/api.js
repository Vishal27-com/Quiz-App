import axios from "axios";
const BASE_URL="https://quizester.onrender.com" 
export const signupApi=(creds)=>{
    return axios.post(`${BASE_URL}/auth/signup`,creds);
}
export const loginApi=(creds)=>{
    return axios.post(`${BASE_URL}/auth/login`,creds);
}
export const getUserApi=(id)=>{
    return axios.get(`${BASE_URL}/auth/${id}`);
}
export const updateUserApi=(id,data)=>{
    return axios.patch(`${BASE_URL}/auth/${id}`,data);
}
export const postQuestionApi=(data)=>{
    return axios.post(`${BASE_URL}/quiz`,data);
}
export const getQuestionApi=(type,level,limit)=>{
    return axios.get(`${BASE_URL}/quiz/?type=${type}&level=${level}&limit=${limit}`);
}
