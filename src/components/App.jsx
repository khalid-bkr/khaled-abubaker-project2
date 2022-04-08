import React from "react";
import WordGrid from "./WordleGame/WordGrid";
import Home from "./Home";
import { useParams } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const { difficulty } = useParams();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/App/:difficulty"} element={<WordGrid />} />
          <Route path={"/App"} element={<WordGrid />} />
        </Routes>
      </BrowserRouter>
      {/* <WordGrid difficulty={difficulty} /> */}
    </div>
  );
};

export default App;
