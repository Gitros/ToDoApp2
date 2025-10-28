import type { ChangeEvent } from "react";
import styles from "./TaskCreate.module.css";

interface TaskCreateProps {
  onBodyChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TaskCreate = ({ onBodyChange }: TaskCreateProps) => {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="Name">Task name</label>
        <input type="text" id="name" required />
      </p>
      <p>
        <label htmlFor="body">Task description</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p className={styles.actions}>
        <button type="button">Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export default TaskCreate;
