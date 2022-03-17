import './App.css';
import React, { useEffect, useState } from "react"
import DisplayOne from "./components/DisplayOne"
import DisplayNew from "./components/DisplayNew"
import Main from "./view/Main"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Main />} path="/product" />
          <Route element={<DisplayOne />} path="/product/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
