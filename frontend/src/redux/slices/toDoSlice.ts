import { createSlice } from "@reduxjs/toolkit";


const toDoSlice = createSlice({
    name :"toDoSlice",
    initialState: {
        toDos : [],
    },
    reducers : {
        initToDo (state,action){
            state.toDos = action.payload
        },
        addToDo (state,action){
            state.toDos.push(action.payload)
        },
        
    }
})


const toDoSliceActions = toDoSlice.actions
const toDoSliceReducer = toDoSlice.reducer

export {toDoSliceActions,toDoSliceReducer}