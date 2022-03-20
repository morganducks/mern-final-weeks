import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";

const DisplayOne = (props) => {

    const { id } = useParams();
    const [oneProduct, setOneProduct] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneProduct(res.data)
            })
            .catch((err) => console.log(err));
    }, [id])



    const handleDelete = (e) => {
        axios.delete("http://localhost:8000/api/product/" + id)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/product")
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>

            <h1>{oneProduct.productName}</h1>
            <p><span style={{fontWeight: "700"}}>Price:</span> ${oneProduct.productPrice}</p>
            <p><span style={{fontWeight: "700"}}>Description:</span> {oneProduct.productDesc}</p>
            <div>
            <button><Link to="/product" style={{textDecoration: "none"}}>Back Home</Link></button>
            </div>
            <div>
            <button className="deleteButton" onClick={handleDelete}>Delete</button>
            </div>
        </div>

    )

}

export default DisplayOne