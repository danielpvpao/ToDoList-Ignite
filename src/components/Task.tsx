import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Task.module.css';

interface TaskProps {
  id: number;
  content: string;
  childToParent: (data: { isChecked: boolean }) => void;
  onDeleteTask: (id : number) => void;
}

function Task({ id, content, childToParent, onDeleteTask }: TaskProps) {
  function handleDeleteTask(){
    onDeleteTask(id)
  }
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    childToParent({ isChecked: newCheckedState });
  };
  
  return (
    <div key={id} className={styles.taskContainer}>
      <button
        className={isChecked ? styles.checkedButton : styles.unCheckedButton}
        onClick={handleButtonClick}
      >
        {isChecked ? <Check size={16} /> : ''}
      </button>
      <p className={isChecked ? styles.checkedContent  :  styles.Content}>{content}</p>
      <Trash className='TrashIcon' size={20} onClick={handleDeleteTask}/>
    </div>
  );
}

export default Task;
