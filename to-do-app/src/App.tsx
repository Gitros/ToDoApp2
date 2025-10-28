import { useCallback, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

export type Task = {
  name: string;
  body: string;
};

function App() {
  const [createTask, setCreateTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTaskHandler = useCallback((taskData: Task) => {
    setTasks((prev) => [taskData, ...prev]);
  }, []);

  const openFormHandler = useCallback(() => setCreateTask(true), []);
  const closeFormHandler = useCallback(() => setCreateTask(false), []);

  return (
    <Layout>
      <Sidebar openForm={openFormHandler} tasks={tasks} />
      <Main
        taskCreation={createTask}
        openForm={openFormHandler}
        closeForm={closeFormHandler}
        onAddTask={addTaskHandler}
        tasks={tasks}
      />
    </Layout>
  );
}

export default App;
