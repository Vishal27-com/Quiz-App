import axios from "axios";
const BASE_URL="http://localhost:8080" 
import { QUIZ_ERROR, QUIZ_LOADING, QUIZ_SUCCESS } from "./quiz.type";
export const getQuestion=(type,level,limit)=>async(dispatch)=>{
    try {
        dispatch({type:QUIZ_LOADING})
        const res=await axios.get(`${BASE_URL}/quiz/?type=${type}&level=${level}&limit=${limit}`);;
        dispatch({type:QUIZ_SUCCESS,payload:res.data.message})
    } catch (error) {
        dispatch({type:QUIZ_ERROR})
    }
}
