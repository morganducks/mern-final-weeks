import './App.css';
import React, { useEffect, useState } from "react"
import Form from "./components/Form"
import EditAuthor from "./components/EditAuthor"
import Main from "./view/Main"

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<EditAuthor/>} path="/authors/edit/:id" />
        <Route element={<Form/>} path="/authors/:id" />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
