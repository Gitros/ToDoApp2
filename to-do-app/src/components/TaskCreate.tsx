import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./TaskCreate.module.css";
import type { Task } from "../App";

interface TaskCreateProps {
  closeForm: () => void;
  onAddTask: (task: Task) => void;
}

const TaskCreate = ({ closeForm, onAddTask }: TaskCreateProps) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  function nameChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredName(event.target.value);
  }

  function bodyChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const taskData = {
      name: enteredName,
      body: enteredBody,
    };
    onAddTask(taskData);
    closeForm();
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.field}>
        <label htmlFor="Name" className={styles.label}>
          Task name
        </label>
        <input
          type="text"
          id="name"
          className={styles.input}
          value={enteredName}
          placeholder="Enter task name"
          required
          onChange={nameChangeHandler}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="body" className={styles.label}>
          Task description
        </label>
        <textarea
          id="body"
          className={styles.textarea}
          value={enteredBody}
          placeholder="Enter task description"
          required
          rows={4}
          onChange={bodyChangeHandler}
        />
      </div>
      <p className={styles.actions}>
        <button
          type="button"
          className={`${styles.btn} ${styles.btnSecondary}`}
          onClick={closeForm}
        >
          Cancel
        </button>
        <button className={styles.btn}>Submit</button>
      </p>
    </form>
  );
};

export default TaskCreate;
