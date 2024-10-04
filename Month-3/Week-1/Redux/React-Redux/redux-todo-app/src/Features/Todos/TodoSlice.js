import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : "todos",
    initialState : {
        tasks:[],
    },
    reducers:{
        addTask: (state,action)=>{
            state.tasks.push({id:Date.now(),title:action.payload});
        },
        deleteTask:(state,action)=>{
            state.tasks=state.tasks.filter(task=>task.id!==action.payload);
        },
        editTask:(state,action)=>{
            const editIndex=state.tasks.findIndex(task=>task.id!==action.payload)
            if(editIndex!==-1){
                state.tasks[editIndex].title = action.payload.title;
            }
        }
    }
})

export const { addTask, deleteTask, editTask} = todoSlice.actions;
export default todoSlice.reducer