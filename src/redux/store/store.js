//  --------------------------- REDUX TOOLKIT -------------------------------

import expenseReducerSlice from "../reducers/expenseReducerSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        expenses : expenseReducerSlice
    }
})


// ------------------------ REACT REDUX -------------------------------------


// import { combineReducers, createStore } from "redux";
// import { expenseReducer } from "../reducers/expenseReducerSlice";

// const rootReducer = combineReducers({
//     expenses : expenseReducer
// })

// const store = createStore(rootReducer)




export default store;