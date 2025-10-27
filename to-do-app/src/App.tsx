import "./App.css";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Layout>
      <Sidebar />
      <Main />
    </Layout>
  );
}

export default App;
