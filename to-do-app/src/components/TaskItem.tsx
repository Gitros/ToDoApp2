import type { Task } from "../App";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <li className={styles.item}>
      <div className={styles.headerRow}>
        <h4 className={styles.name} title={task.name}>
          {task.name}
        </h4>
        <span className={styles.badge}>New</span>
      </div>

      <p className={styles.body} title={task.body}>
        {task.body}
      </p>

      <div className={styles.footerRow}>
        <span className={styles.meta}>Just now</span>
        <div className={styles.actions}>
          {/* simple inline icons; wire up later if you want */}
          <button className={styles.iconBtn} aria-label="Edit" title="Edit">
            ✎
          </button>
          <button className={styles.iconBtn} aria-label="Delete" title="Delete">
            🗑
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
