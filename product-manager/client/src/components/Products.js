import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = (props) => {

    const { allProducts, setAllProducts } = props;
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDesc, setProductDesc] = useState("");

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


        axios.post("http://localhost:8000/api/product", {
            productName,
            productPrice,
            productDesc,
        })

            .then((res) => {
                console.log(res);
                console.log(res.data);

                setProductName("");
                setProductPrice("");
                setProductDesc("");
            })
            .catch((err) => {

                console.log(err);
            })
            e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <div
            style={{marginTop: "40px"}}>
                <h1>Add a product</h1>
                <div className="productRow">
                <label htmlFor="Name">Product Name</label>
                <input type="text" name="Name" onChange={(e) => {
                    handleProductName(e);
                }}
                    value={productName}

                />
                </div>
                <div className="productRow">
                <label htmlFor="Price">Product Price</label>
                <input type="text" name="Price" onChange={(e) => {
                    handleProductPrice(e);

                }}
                    value={productPrice}

                />
                </div>
                <div className="productRow">
                <label htmlFor="description">Product Description</label>
                <input type="text" name="description" onChange={(e) => {
                    handleProductDesc(e);
                }}
                    value={productDesc}
                />
                </div>
                <button>Add product</button>
            </div>
        </form>
    )


}

export default Products