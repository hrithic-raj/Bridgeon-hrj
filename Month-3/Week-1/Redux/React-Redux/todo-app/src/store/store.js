import TodoReducer from '../todos/TodoSlice'
import {configureStore} from '@reduxjs/toolkit'
const store = configureStore({
    reducer:{
        todos:TodoReducer
    }
})

export default store;