import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles["side-bar"]}>
      <div className={styles.header}>
        <h1>To do app</h1>
        <button className={styles["task-btn"]}>Add task</button>
      </div>

      <ul>
        <li>Task 1</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
