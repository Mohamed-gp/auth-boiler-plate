import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "toDoSlice",
  initialState: {
    toDos: [] as any[],
  },
  reducers: {
    initToDo(state, action) {
      state.toDos = action.payload;
    },
    addToDo(state, action) {
      state.toDos.push(action.payload);
    },
    removeTodo(state, action) {
      state.toDos = state.toDos.filter((ele) => ele.id != action.payload);
    },
  },
});

const toDoSliceActions = toDoSlice.actions;
const toDoSliceReducer = toDoSlice.reducer;

export { toDoSliceActions, toDoSliceReducer };
