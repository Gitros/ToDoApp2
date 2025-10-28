import type { Task } from "../App";
import styles from "./Main.module.css";
import TaskCreate from "./TaskCreate";
import TaskList from "./TaskList";

interface MainProps {
  taskCreation: boolean;
  openForm: () => void;
  closeForm: () => void;
  onAddTask: (task: Task) => void;
  onToggleDone: (name: string) => void;
  tasks: Task[];
}

const Main = ({
  taskCreation,
  openForm,
  closeForm,
  onAddTask,
  onToggleDone,
  tasks,
}: MainProps) => {
  return (
    <main className={styles.main}>
      {!taskCreation && (
        <header className={styles.header}>
          <h2 className={styles.title}>Tasks</h2>
          <button className={styles["add-btn"]} onClick={openForm}>
            + New Task
          </button>
        </header>
      )}
      {taskCreation ? (
        <section className={styles.panel}>
          <h3 className={styles.subtitle}>Create Task</h3>
          <TaskCreate closeForm={closeForm} onAddTask={onAddTask} />
        </section>
      ) : (
        <section>
          {tasks.length === 0 ? (
            <div className={`${styles.empty} ${styles["empty-card"]}`}>
              <p>No tasks yet.</p>
              <button className={styles["add-btn"]} onClick={openForm}>
                Create your first task
              </button>
            </div>
          ) : (
            <TaskList tasks={tasks} onToggleDone={onToggleDone} />
          )}
        </section>
      )}
    </main>
  );
};

export default Main;
