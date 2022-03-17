import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Products from "../components/Products"
import DisplayAll from "../components/DisplayAll"


const Main = (props) => {

    const [allProducts,setAllProducts] = useState([]);
    //state needs to be passed to child component level below via props below
return(
    <div>
<Products allProducts={allProducts} setAllProducts={setAllProducts}/>
<DisplayAll allProducts={allProducts} setAllProducts={setAllProducts} /> 
</div>
)

}

export default Main