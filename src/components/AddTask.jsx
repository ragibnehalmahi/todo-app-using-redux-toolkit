// src/components/AddTask.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
        className="border p-2 mr-2 rounded"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
