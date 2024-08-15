import React, { useState } from 'react';
import styles from './Taskbar.module.css';
import { PlusCircle } from 'phosphor-react';

interface TaskbarProps {
  onCreateNewTask: (taskContent: string) => void; 
}

function Taskbar({ onCreateNewTask }: TaskbarProps) {
  const [newTaskContent, setNewTaskContent] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskContent(event.target.value);
  };

  const handleButtonClick = () => {
    onCreateNewTask(newTaskContent); 
    setNewTaskContent('')
  }; 

const isNewTaskContentEmpty = newTaskContent.length === 0;
  return (
    <div className={styles.Taskbarcontainer}>
      <input placeholder='Adicione uma nova tarefa' className={styles.Taskbar} type="text" onChange={handleInputChange} value={newTaskContent}/>
      <button type='button' disabled={isNewTaskContentEmpty} onClick={handleButtonClick} > 
        Criar <PlusCircle />
      </button>
    </div>
  );
}

export default Taskbar;
