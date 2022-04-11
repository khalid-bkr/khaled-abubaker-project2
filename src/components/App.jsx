import React from "react";
import WordGrid from "./WordleGame/WordGrid";
import Home from "./Home";
import NavBar from "./NavBar";
import { useParams } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Game/:difficulty"} element={<WordGrid />} />
          <Route path={"/Game"} element={<WordGrid />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
