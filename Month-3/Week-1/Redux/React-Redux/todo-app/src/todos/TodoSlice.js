import {createSlice} from '@reduxjs/toolkit'

const TodoSlice=createSlice({
    name:'todos',
    initialState:{
        tasks:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.tasks.push({ id: Date.now(), title: action.payload });
        },
        deleteTodo:(state,action)=>{
            state.tasks=state.tasks.filter((task)=>task.id!==action.payload)
        },
        editTodo:(state,action)=>{
            const editIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (editIndex !== -1) {
                state.tasks[editIndex].title = action.payload.title;
            }
        }
    }
})

export const {addTodo, deleteTodo, editTodo} = TodoSlice.actions
export default TodoSlice.reducer