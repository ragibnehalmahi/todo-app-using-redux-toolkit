// src/redux/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.text = newText;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
