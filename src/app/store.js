import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import noteReducer from '../components/note/noteSlice';

export const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});
