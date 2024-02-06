import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (!loggedIn) {
    return (
      <Layout dark>
        <Login onLogin={handleLogin} />
      </Layout>
    );
  }

  return (
    <Layout header={<Header />} withSidebar>
      <Content />
    </Layout>
  );
}

export default App;
