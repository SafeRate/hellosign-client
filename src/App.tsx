import React from "react";
import { Route, Routes } from "react-router-dom";
import PurchaseContract from "./PurchaseContract/PurchaseContract";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PurchaseContract />}></Route>
    </Routes>
  );
};

export default App;
