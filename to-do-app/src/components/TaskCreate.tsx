import styles from "./TaskCreate.module.css";

const TaskCreate = () => {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="Name">Task name</label>
        <input id="name" required />
      </p>
    </form>
  );
};

export default TaskCreate;
