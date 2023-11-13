import {createSlice} from '@reduxjs/toolkit';


const initialList =()=>{
    const list_local = localStorage.getItem('expense-list-local');
    let expenses_local = []
    if(list_local){
        expenses_local=JSON.parse(list_local)
    }
    return expenses_local;
}
const initialState = {
    expenseList: initialList(),
    query:''
}



//  --------------------------- REDUX TOOLKIT -------------------------------

const expenseReducerSlice = createSlice({
    name:'expenseReducer',
    initialState,
    reducers:{
        addExpense : (state,action)=>{
            // state.expenseList=action.payload
            localStorage.setItem('expense-list-local',JSON.stringify([...state.expenseList,action.payload]))
            return{
                ...state,
                expenseList:[...state.expenseList,action.payload]
            }
        },
        deleteExpense:(state,action)=>{
            const updatedList = state.expenseList.filter(item=>item.createdAt !== action.payload.createdAt);
            localStorage.setItem('expense-list-local',JSON.stringify(updatedList))

            return{
                ...state,
                expenseList:updatedList
            }
        },
        searchExpense:(state,action)=>{
            return{
                ...state,query:action.payload
            }
        }
    }
})

export const {addExpense,deleteExpense,searchExpense} = expenseReducerSlice.actions
export default expenseReducerSlice.reducer;


// ------------------------ REACT REDUX -------------------------------------

// export const expenseReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_EXPENSE":
//             return {
//                 ...state, expenseList: [...state.expenseList, action.payload]
//             }

//         default:
//             return state
//     }
// }