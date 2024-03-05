import { configureStore } from "@reduxjs/toolkit"
import { toDoSliceReducer } from "./slices/toDoSlice"
import { authreducer } from "./slices/userSlice"

const store = configureStore({
    reducer : {
        auth: authreducer,
        toDo : toDoSliceReducer
    },
})



export {store}