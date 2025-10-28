import type { Task } from "../App";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  openForm: () => void;
  tasks: Task[];
}

const Sidebar = ({ openForm, tasks }: SidebarProps) => {
  return (
    <aside className={styles["side-bar"]}>
      <div className={styles.header}>
        <h1>To do app</h1>
        <button className={styles["task-btn"]} onClick={openForm}>
          Add task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <div key={task.name}>
            <p>{task.name}</p>
          </div>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
