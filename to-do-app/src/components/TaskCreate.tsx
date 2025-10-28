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
      <p>
        <label htmlFor="Name">Task name</label>
        <input type="text" id="name" required onChange={nameChangeHandler} />
      </p>
      <p>
        <label htmlFor="body">Task description</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={closeForm}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export default TaskCreate;
