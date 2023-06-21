import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import JsonServer from "./components/JSONSERVER/JsonServer";
import Numbers from "./components/Numbers/Numbers";
import SpendAnalysis from "./components/SpendAnlaysis/SpendAnalysis";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="task1" element={<JsonServer />} />
        <Route path="task2" element={<Numbers />} />
        <Route path="task3" element={<SpendAnalysis />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
