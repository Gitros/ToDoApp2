import { useState, type ChangeEvent } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [enteredBody, setEnteredBody] = useState("");

  function bodyChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  return (
    <Layout>
      <Sidebar body={enteredBody} />
      <Main onBodyChange={bodyChangeHandler} />
    </Layout>
  );
}

export default App;
