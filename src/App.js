import React from "react";
import { useRoutes } from "react-router-dom";

import routes from "./routes";
import TopBar from "./components/topBar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";

import "./App.css";

function App() {
  const routers = useRoutes(routes);

  return (
    <>
      <TopBar />
      <div className="app-container">
        <Sidebar />
        {routers}
      </div>
    </>
  );
}

export default App;
