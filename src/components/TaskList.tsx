import { useState } from 'react';
import styles from './TaskList.module.css';
import Task from './Task';
import Taskbar from './Taskbar';
import EmptyTaskList from './EmptyTaskList';

const TaskProps = [
  {
  content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  id: 1,
  },
  {
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    id: 2,
    }
]


function TaskList() {
  const [completedCount, setCompletedCount] = useState(0);
  function childToParent(data : { isChecked: boolean }){
    setCompletedCount(completedCount + (data.isChecked ? 1 : -1));
  }
 
  const [tasks, setTasks] = useState(TaskProps);
  function handleCreateNewTask(content : string) {
    setTasks([...tasks, { content: content, id: Date.now() }]);
    if(content == '' || null){
      setTasks([...tasks])
      return
    }
  
  }
  function deleteTask(taskToDelete : number){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete
    })
    
    setTasks(tasksWithoutDeletedOne)
   
    const isDeletedTaskCompleted = completedCount > tasksWithoutDeletedOne.length;
    if (isDeletedTaskCompleted) {
      setCompletedCount(completedCount - 1);
    }
  }
  return (
    
    <div className={styles.Container}>
      <Taskbar onCreateNewTask={handleCreateNewTask} />
      <header className={styles.Header}>
        <nav className={styles.Nav1}>
          <span>Tarefas criadas</span>
          <div>{tasks.length}</div>
        </nav>
        <nav className={styles.Nav2}>
          <span>Concluídas</span>
          <div>{completedCount} de {tasks.length}</div>
        </nav>
      </header>
      {tasks.map(task => (
        <Task key={task.id} 
          {...task}
          childToParent={childToParent} 
          onDeleteTask={deleteTask} /> 
      ))}
      <EmptyTaskList completedCount={tasks.length} />
    </div>
  );
}

export default TaskList;
