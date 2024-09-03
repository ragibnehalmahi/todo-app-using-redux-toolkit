// src/components/TaskList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded p-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available. Add one!</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
