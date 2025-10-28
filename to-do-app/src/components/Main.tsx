import type { Task } from "../App";
import styles from "./Main.module.css";
import TaskCreate from "./TaskCreate";

interface MainProps {
  taskCreation: boolean;
  closeForm: () => void;
  onAddTask: (task: Task) => void;
}

const Main = ({ taskCreation, closeForm, onAddTask }: MainProps) => {
  return (
    <main className={styles.main}>
      <h2>taski</h2>
      <div className={styles.body}>
        {taskCreation ? (
          <TaskCreate closeForm={closeForm} onAddTask={onAddTask} />
        ) : (
          <p>No task selected yet</p>
        )}
      </div>
    </main>
  );
};

export default Main;
