import './App.css';
import React, {useEffect} from "react"
import Products from "./components/Products"
import axios from 'axios';


function App() {

  useEffect(() => {
    axios.post("http://localhost:8000/api/product")
    .then((res)=>{
      console.log(res);
      console.log(res.data)
    })})

  return(
    <div className="App">
      <Products path="http://localhost:8000/api/product" />
    </div>
  );
}

export default App;
