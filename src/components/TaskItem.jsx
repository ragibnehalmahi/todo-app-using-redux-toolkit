// src/components/TaskItem.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/tasksSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    if (newText.trim()) {
      dispatch(editTask({ id: task.id, newText }));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex justify-between items-center mb-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border p-1 flex-grow mr-2 rounded"
          />
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white px-2 py-1 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-2 py-1 rounded"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
