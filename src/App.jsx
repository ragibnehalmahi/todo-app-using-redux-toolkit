// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6">Todo App</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
