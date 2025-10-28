import type { ChangeEvent } from "react";
import styles from "./Main.module.css";
import TaskCreate from "./TaskCreate";

interface MainProps {
  onBodyChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Main = ({ onBodyChange }: MainProps) => {
  return (
    <main className={styles.main}>
      <h2>taski</h2>
      <div className={styles.body}>
        <TaskCreate onBodyChange={onBodyChange} />
      </div>
    </main>
  );
};

export default Main;
