// src/features/example/exampleSlice.js
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Define your API URL
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Create an async thunk
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(`${API_URL}?_limit=20`);
  return response.data;
});

// Create a slice
const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default exampleSlice.reducer;