import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page/MainPage';
import { AboutPage } from './pages/about-page/AboutPage';
import { ErrorPage } from './pages/error-page/ErrorPage';
import { FormsPage } from './pages/forms-page/FormsPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/forms" element={<FormsPage />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
