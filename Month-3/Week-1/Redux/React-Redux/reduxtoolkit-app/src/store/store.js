// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../Slice/FetchSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;
