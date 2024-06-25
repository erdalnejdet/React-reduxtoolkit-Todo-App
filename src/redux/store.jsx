import { configureStore } from '@reduxjs/toolkit';
import TodoSlices from './slices/TodoSlices.jsx';

export const store = configureStore({
  reducer: {
    todo: TodoSlices,
 

  },
})