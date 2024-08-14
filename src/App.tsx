// App.tsx
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Taskbar from './components/Taskbar';
import TaskList from './components/TaskList';

function App() {
  function onCreateNewTask (){

  }
  return (
    <>
      <Header /> 
      <TaskList  />
    </>
  );
}

export default App;
