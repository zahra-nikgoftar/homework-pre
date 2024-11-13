import React from "react";
import NavSide from "./components/nav";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import Directories from "./pages/Directories";
import ImportantTasks from "./pages/ImportantTasks";
import MainPage from "./pages/MainPage";
import Secondary from "./pages/Secondary";
import UncompletedTasks from "./pages/UncompletedTasks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBody from "./components/NavBody";
import Menu from "./components/menu";
function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <NavSide />
          <div
            style={{
              height: "100vh",
              width: "100vw",
              background: "#dde0df",
            }}
          >
            <NavBody />
            <Menu />
            <Routes>
              <Route path="/" element={<AllTasks />} />
              <Route path="/completedTasks" element={<CompletedTasks />} />
              <Route path="/directories" element={<Directories />} />
              <Route path="/importantTasks" element={<ImportantTasks />} />
              <Route path="/mainPage" element={<MainPage />} />
              <Route path="/secondary" element={<Secondary />} />
              <Route path="/uncompletedTasks" element={<UncompletedTasks />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
