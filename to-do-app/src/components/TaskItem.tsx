import type { Task } from "../App";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <li className={styles.item}>
      <div className={styles.row}>
        <h4 className={styles.name}>{task.name}</h4>
      </div>
      <p className={styles.body}>{task.body}</p>
    </li>
  );
};

export default TaskItem;
