import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main-page/MainPage";

const App = () => {
  return (
    <>
      
      <Routes>
        <Route  index element={<MainPage />}></Route>
        
      </Routes>
    </>
  );
}

export default App