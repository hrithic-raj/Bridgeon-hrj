import {createStore} from 'redux';
import counterReducer from './Reducers/counterReducer';

const store = createStore(counterReducer)

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import customMiddleware from '../middleware/loggerMiddleware';

// const store = configureStore({
//     reducer: {
//       counter: counterReducer,
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
//   });

