import './App.css';
import React, {useEffect, useState} from "react"
import Products from "./components/Products"
import DisplayAll from "./components/DisplayAll"
import DisplayOne from "./components/DisplayOne"
import DisplayNew from "./components/DisplayNew"
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {



  return(
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<Products />} path="/" />   
        <Route element={<DisplayOne />} path="/one/:id" />  
        <Route element={<DisplayAll />} path="/all" />  
        <Route element={<DisplayNew />} path="/new/:id" />  
      </Routes>
      
    </div>
  </BrowserRouter>
  );
}

export default App;
