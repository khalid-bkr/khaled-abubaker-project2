import React from "react";
import WordGrid from "./WordleGame/WordGrid";
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rules from "./Rules";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Game/:difficulty"} element={<WordGrid />} />
          <Route path={"/Game"} element={<WordGrid />} />
          <Route path={"/Rules"} element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
