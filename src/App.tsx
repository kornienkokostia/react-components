import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page/MainPage';
import { AboutPage } from './pages/about-page/AboutPage';
import { ErrorPage } from './pages/error-page/ErrorPage';
import Header from './components/header/Header';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
