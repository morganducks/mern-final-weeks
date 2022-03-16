import React, {useState} from "react";
import axios from "axios";

const Products = (props) => {

    const [productName, setProductName] = useState("");
    const [productPrice,setProductPrice] = useState("");
    const [productDesc,setProductDesc] = useState("");

    const handleProductName = (e) => {
        setProductName(e.target.value);
    }

    const handleProductPrice = (e) => {
        setProductPrice(e.target.value);
    }

    const handleProductDesc = (e) => {
        setProductDesc(e.target.value);
    }
    
const submitHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/product",{
        productName,
        productPrice,
        productDesc,
    })

    .then((res)=>{
        console.log(res);
        console.log(res.data);
    
    setProductName("");
    setProductPrice("");
    setProductDesc("");
    })
    .catch((err)=>{

        console.log(err);
})
    
    }

return(
    <form onSubmit={submitHandler}>
    <div>
        <label htmlFor="Name">Product Name</label>
        <input type="text" name="Name" onChange={ (e) => {
            handleProductName(e);
        } } 
            value={productName}

        />
                <label htmlFor="Price">Product Price</label>
        <input type="number" name="Price" onChange={ (e) => {
            handleProductPrice(e);

        } } 
        value={productPrice}

        />
                <label htmlFor="description">Product Description</label>
        <input type="text" name="description" onChange={ (e) => {
            handleProductDesc(e);
        } } 
        value={productDesc}
        />
        <button>Add box</button>
    </div>
    </form>
)


}

export default Products