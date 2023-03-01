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
export const getAllUserApi=(filter="both",sort="asc",page=1,limit=10)=>{
    return axios.get(`${BASE_URL}/auth/?filterby=${filter}&sortby=${sort}&page=${page}&limit=${limit}`);
}
export const updateUserApi=(id,data)=>{
    return axios.patch(`${BASE_URL}/auth/${id}`,data);
}
export const deleteUserApi=(id)=>{
    return axios.delete(`${BASE_URL}/auth/${id}`);
}
export const postQuestionApi=(data)=>{
    return axios.post(`${BASE_URL}/quiz`,data);
}
export const deleteQuestionApi=(id)=>{
    return axios.delete(`${BASE_URL}/quiz/${id}`);
}
export const updateQuestionApi=(id,data)=>{
    return axios.patch(`${BASE_URL}/quiz/${id}`,data);
}
export const getQuestionApi=(type,level,limit)=>{
    return axios.get(`${BASE_URL}/quiz/?type=${type}&level=${level}&limit=${limit}`);
}
export const getQuestionByIdApi=(id)=>{
    return axios.get(`${BASE_URL}/quiz/question/${id}`);
}
export const getAllQuestionApi=(type,level,sort,page,limit)=>{
    return axios.get(`${BASE_URL}/quiz/all/?type=${type}&level=${level}&sortby=${sort}&page=${page}&limit=${limit}`);
}
export const postResultApi=(data)=>{
    return axios.post(`${BASE_URL}/result`,data);
}
export const getResultApi=(id)=>{
    return axios.get(`${BASE_URL}/result/${id}`);
}
export const getLeaderBoardApi=()=>{
    return axios.get(`${BASE_URL}/result`);
}
