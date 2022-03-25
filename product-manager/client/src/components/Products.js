import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = (props) => {

    const { allProducts, setAllProducts } = props;
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const navigate = useNavigate();

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
        axios.post("http://localhost:8000/api/authors", {
            authorName,
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorName("");

            })
            .catch((err) => {

                console.log(err);
            })
        navigate("/product");

    }

    return (
        <form onSubmit={submitHandler}>
            <div
                style={{ marginTop: "40px", marginBottom: "40px" }}>
                <h1>Add an Author</h1>
                <div className="productRow">
                    <label htmlFor="Name">Product Name</label>
                    <input type="text" name="Name" onChange={(e) => setAuthorName(e.target.value)}
                        value={productName}

                    />
                </div>
                <button>Add author</button>
            </div>
        </form>
    )


}

export default Products