import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


const Edit = (props) => {

    const { allProducts, setAllProducts } = props;
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductName(res.data.productName)
                setProductPrice(res.data.productPrice)
                setProductDesc(res.data.productDesc)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            productName,
            productPrice,
            productDesc,
        })

            .then((res) => {
                console.log(res);
                console.log(res.data);
                console.log("edited")
                navigate("/product")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Edit this product</h1>
            <button><Link to="/product" style={{ textDecoration: "none" }}>Back Home</Link></button>
            <form onSubmit={submitHandler}>
                <div style={{ marginTop: "40px" }}>
                    <div className="productRow">
                        <label htmlFor="Name">Product Name</label>
                        <input value={productName} onChange={(e) => {
                            setProductName(e.target.value)
                        }}
                            type="text" name="Name" />
                    </div>
                    <div className="productRow">
                        <label htmlFor="Price">Product Price</label>
                        <input value={productPrice} onChange={(e) => {
                            setProductPrice(e.target.value)
                        }}
                            type="text" name="Price" />

                    </div>
                    <div className="productRow">
                        <label htmlFor="description">Product Description</label>
                        <input value={productDesc} onChange={(e) => {
                            setProductDesc(e.target.value)
                        }}
                            type="text" name="Name" />

                    </div>
                    <button>Edit product</button>
                </div>
            </form>
        </div>
    )

}

export default Edit