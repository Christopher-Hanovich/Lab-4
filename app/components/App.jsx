/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView
} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

/**
 * Main App Component
 * 
 * This is the root component of the To Do List application.
 * It manages the state of all tasks and coordinates between the
 * ToDoList (display) and ToDoForm (input) components.
 */
export default function App() {
  // State hook to manage the list of tasks
  // Initialized with three default tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  /**
   * Adds a new task to the tasks array
   * 
   * @param {string} task - The task text to be added
   * 
   * Prevents duplicate tasks by checking if the task already exists
   * Uses spread operator to create a new array with the existing tasks plus the new one
   */
  const addTask = (task) => {
    if (!tasks.includes(task)) {
      setTasks([...tasks, task]);
    }
  };

  return (
    <SafeAreaView>
      {/* Display the list of tasks */}
      <ToDoList tasks={tasks} />
      {/* Form component for adding new tasks */}
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
};
