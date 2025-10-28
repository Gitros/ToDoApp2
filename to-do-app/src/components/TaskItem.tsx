import type { Task } from "../App";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
  task: Task;
  onToggleDone: (name: string) => void;
}

const TaskItem = ({ task, onToggleDone }: TaskItemProps) => {
  return (
    <li className={`${styles.item} ${task.done ? styles.done : ""}`}>
      <div className={styles.headerRow}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={!!task.done}
            onChange={() => onToggleDone(task.name)}
          />
          <h4 className={styles.name} title={task.name}>
            {task.name}
          </h4>
        </div>
        {!task.done && <span className={styles.badge}>New</span>}
      </div>

      <p className={styles.body} title={task.body}>
        {task.body}
      </p>

      <div className={styles.footerRow}>
        <span className={styles.meta}>
          {task.done ? "Completed" : "Just now"}
        </span>
        <div className={styles.actions}>
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
