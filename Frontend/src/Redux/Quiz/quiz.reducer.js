import {  QUIZ_ERROR, QUIZ_LOADING, QUIZ_RESULT, QUIZ_SUCCESS } from "./quiz.type";

const init={
    loading:false,
    error:false,
    question:[],
    result:{},
}

export const quizReducer=(state=init,{type,payload})=>{
switch (type) {
    case QUIZ_LOADING:{
        return {
            ...state,
            loading:true
        }
    }
    case QUIZ_SUCCESS:{
        return {
            ...state,
            loading:false,
            question:payload
        }
    }
    case QUIZ_ERROR:{
        return {
            ...state,
            loading:false,
            error:true
        }
    }
    case QUIZ_RESULT:{
        return {
            ...state,
           result:payload
        }
    }
    default:return state;
}
}