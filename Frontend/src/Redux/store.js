import { quizReducer } from "./Quiz/quiz.reducer"
import thunk from "redux-thunk"
import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
const rootReducers=combineReducers({
    quiz:quizReducer
})
const composer= window._REDUX_DEVTOOL_EXTENSION || compose
export const store=legacy_createStore(rootReducers,composer(applyMiddleware(thunk)))