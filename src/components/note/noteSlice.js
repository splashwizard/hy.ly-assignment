import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [],
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    create: (state, action) => {
      state.list.push({id: Array.isArray(state.list) ? state.list.length + 1 : 1, ...action.payload, starred: false});
      localStorage.setItem('list', JSON.stringify(state.list));
    },
    edit: (state, action) => {
      const { id, note } = action.payload;
      const noteIdx = state.list.findIndex(note => note.id === id);
      state.list[noteIdx] = {id, ...note, starred: state.list[noteIdx].starred};
      localStorage.setItem('list', JSON.stringify(state.list));
    },
    remove: (state, action) => {
      const { id } = action.payload;
      state.list = state.list.filter(note => note.id !== id);
      localStorage.setItem('list', JSON.stringify(state.list));
    },
    toggleStarred: (state, action) => {
      const { id } = action.payload;
      const noteIdx = state.list.findIndex(note => note.id === id);
      state.list[noteIdx].starred = !state.list[noteIdx].starred;
      localStorage.setItem('list', JSON.stringify(state.list));
    },
  },
});

export const { create, edit, remove, toggleStarred } = noteSlice.actions;

export const selectNote = (state) => state.note.list;
export const selectStaredNote = (state) => state.note.list.filter(note => note.starred);

export default noteSlice.reducer;
