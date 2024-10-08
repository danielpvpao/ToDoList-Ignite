import styles from './EmptyTaskList.module.css'
import Clipboard from '../assets/Clipboard.svg'
interface EmptyTaskListProps {
    completedCount: number;
  }
function EmptyTaskList({ completedCount }: EmptyTaskListProps)  {
    if(completedCount === 0){
        return(
            <div className={styles.Empty}>
            <img src={Clipboard} alt="Imagem bloco de notas" />
            <strong>Você ainda não têm tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
            ) 
    }

    return null
    
}
export default EmptyTaskList