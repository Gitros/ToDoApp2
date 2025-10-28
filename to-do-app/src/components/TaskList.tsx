import type { Task } from "../App";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
  onToggleDone: (name: string) => void;
}

const TaskList = ({ tasks, onToggleDone }: TaskListProps) => {
  return (
    <ul className={styles.list}>
      {tasks.map((t, idx) => (
        <TaskItem key={idx} task={t} onToggleDone={onToggleDone} />
      ))}
    </ul>
  );
};

export default TaskList;
