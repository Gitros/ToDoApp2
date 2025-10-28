import type { Task } from "../App";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <ul className={styles.list}>
      {tasks.map((t, idx) => (
        <TaskItem key={idx} task={t} />
      ))}
    </ul>
  );
};

export default TaskList;
