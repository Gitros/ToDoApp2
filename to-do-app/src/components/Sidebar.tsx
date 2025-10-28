import styles from "./Sidebar.module.css";

interface SidebarProps {
  body: string;
}

const Sidebar = ({ body }: SidebarProps) => {
  return (
    <aside className={styles["side-bar"]}>
      <div className={styles.header}>
        <h1>To do app</h1>
        <button className={styles["task-btn"]}>Add task</button>
      </div>

      <ul>
        <li>{body}</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
