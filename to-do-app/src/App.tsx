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

  function openFormHandler() {
    setCreateTask(true);
  }

  function closeFormHandler() {
    setCreateTask(false);
  }

  return (
    <Layout>
      <Sidebar openForm={openFormHandler} tasks={tasks} />
      <Main
        taskCreation={createTask}
        closeForm={closeFormHandler}
        onAddTask={addTaskHandler}
      />
    </Layout>
  );
}

export default App;
